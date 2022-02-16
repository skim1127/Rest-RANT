// require needed modules
const express = require("express")
require("dotenv").config()

// initialize app
const app = express()

// Create Home page route
app.get('/', (req, res) => {
    res.send(`
    <h1>
        Welcome to the Home Page
    </h1>
    `)
})

// Wildcard Route
app.get('*', (req, res) => {
    res.status(404).send(`
    <h1>
        This Page does not exist. Go away :)
    </h1>
    `)
})

// Listen
app.listen(process.env.PORT, () => {
    console.log("Listening to port 3000")
})