const router = require('express').Router()

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