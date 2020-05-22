const mongoose = require('mongoose');
const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('mongoose is CONNECTED');
});

mongoose.connection.on('error', (err) => {
    console.log(`error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose. id DISCONNECTED');
});

