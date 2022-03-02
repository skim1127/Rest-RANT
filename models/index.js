// Require needed modules: (dotenv, mongoose)
const mongoose = require('mongoose')
// dotenv required to make use of the MONGO_URI environment variable
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Making a one-stop shop for our connection info. and access to all our models.
module.exports.Place = require('./places')