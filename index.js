// require needed modules
const express = require("express")
require("dotenv").config()
const methodOverride = require('method-override')
// initialize app
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))

// PARSING REQ
app.use(express.urlencoded({extended: true}))

// require controller
app.use('/places', require('./controllers/places_controller'))

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
