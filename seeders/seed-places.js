// CRUD access for our database
const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}])
// print out message if successful
.then(() => {
    console.log('Success!')
    process.exit()
})
// print out message if failed
.catch(() => {
    console.log('Failure!', err)
    process.exit()
})