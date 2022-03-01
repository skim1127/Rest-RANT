const router = require('express').Router()
const places = require('../models/places')

// CREATE NEW PLACE
router.post('/', (req, res) => {
    // console.log(req.body)
    if (!req.body.pic) {
        // Default values if nothing is provided
        req.body.pic = "https://place-puppy.com/250x250"
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

// NEW PLACE FORM
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/places/:id', (req, res) => {
    let id = req.params.id
    console.log(id)
})

// SHOW
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
})

// EDIT
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', { 
            place: places[id], 
            id: id 
        })
    }
})
// UPDATE
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    // redirect user 
    else {
        // make sure data is valid
        if (!req.body.pic) {
            // set default image
            req.body.pic = "http://placekitten.com/400/400"
        }
        if (!req.body.city) {
            req.body.city = "Sometown"
        }
        if (!req.body.state) {
            req.body.state = "USA"
        }
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)        
    }
})


// Render places index
router.get('/', (req, res) => {
    res.render('places/index', {places})
})

// DELETE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

module.exports = router