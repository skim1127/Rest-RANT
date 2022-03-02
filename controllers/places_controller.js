const router = require('express').Router()
const db = require('../models')

// Render places index
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

// CREATE NEW PLACE
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

// NEW PLACE FORM
router.get('/new', (req, res) => {
    res.render('places/new')
})

// SHOW
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

// DELETE
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

// EDIT
router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

// POST RANT
router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

// DELETE RANT
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

// router.get('/places/:id', (req, res) => {
//     let id = req.params.id
//     console.log(id)
// })
module.exports = router