// require needed modules
const express = require("express")

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

// Listen
app.listen(3000, () => {
    console.log("Listening to port 3000")
})