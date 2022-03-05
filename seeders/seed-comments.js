const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Create a sample comment
    let comment = await db.Comment.create({
        author: 'Mohenjo Daro',
        rant: false,
        stars: 5.0,
        content: 'Fantastic.'
    })

    // Add the comment to the place's comment array
    place.comments.push*(comment.id)

    // save the place
    await place.save()

    // exit the program
    process.exit()
}

seed()