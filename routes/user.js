const express = require('express');
const router = express.Router();
const User = require('../model/Users');
const bcrypt = require('bcryptjs');

router.post('/register', async (req,res) => {
    const password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    req.body.password = hashedPassword;

    try {
        const createdUSer = await User.create(req.body);
        return res.status(200).json({
            message: "Successfully added user"
        });
    } catch (error) {
        return res.status(400).json(`Error: ${error}`);
    }
})

module.exports = router;

