// require needed modules
const express = require("express")
require("dotenv").config()
// initialize app
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

// Create Home page route
app.get('/', (req, res) => {
    res.render('home')
})

// Wildcard Route
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen
app.listen(process.env.PORT, () => {
    console.log("Listening to port 3000")
})
