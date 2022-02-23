const router = require('express').Router()

// NEW PLACE
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/places/:id', (req, res) => {
    let id = req.params.id
    console.log(id)
})

router.get('/', (req, res) => {
    let places = [{
        name: 'Chok-Dee',
        city: 'Atlanta',
        state: 'WA',
        cuisines: 'Thai Food',
        pic: '/images/fried-rice.jpg'
    }, {
        name: 'Mochinut',
        city: 'Whanganui',
        state: 'NZ',
        cuisines: 'Mochi-Donuts, Hot Dogs',
        pic: '/images/Mochinut.jpg'
    }]
    res.render('places/index', {places})
})

module.exports = router