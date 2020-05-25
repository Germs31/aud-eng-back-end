const express = require('express');
const router = express.Router();
const User = require('../model/Users');
const bcrypt = require('bcryptjs');

router.post('/login', async (req,res) =>{
    try {
        const foundUser = await User.findOne({username: req.body.username});

        if(foundUser){
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.userId = foundUser._id;
                req.sessino.username = foundUser.username;
                req.session.logged = true;
                res.json({foundUser});
            } else {
                req.session.message = 'Username or password is incorrect';
            }
        } else {
            req.session.message = 'Username or password is incorrect';
            res.redirect('/');
        }
    } catch (error) {
        console.log(err);
        res.send(err);
    }
});

router.post('/register', async (req,res) => {
    const password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    req.body.password = hashedPassword;

    try {
        const createdUser = await User.create(req.body);

        req.session.userId = createdUser._id;
        req.session.username = createdUser.username;
        req.session.logged = true;
        return res.status(200).json({
            message: "Successfully added user",
            data: createdUser
        });
    } catch (error) {
        return res.status(400).json(`Error: ${error}`);
    }
});

router.get('/logout', (req,res) => {
    req.session.destroy((err)=>{
        if(err){
            res.send(err);
        } else {
            res.json({"isLogged": true});
        }
    });
});

module.exports = router;

