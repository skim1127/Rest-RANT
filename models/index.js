// Connect to Mongoose Database
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Making a one-stop shop for our connection info. and access to all our models.
module.exports.Place = require('./places')