const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Chok-Dee',
        city: 'Atlanta',
        state: 'WA',
        cuisines: 'Thai',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Mochinut',
        city: 'Wanganui',
        state: 'NZ',
        cuisines: 'Mochi-Donuts, Hot Dogs',
        pic: 'https://place-puppy.com/250x250'
    }]
    res.render('places/index', {places})
})

module.exports = router