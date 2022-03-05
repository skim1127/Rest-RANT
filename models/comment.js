// Require needed modules
const mongoose = require('mongoose')

// Schema constructor
let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: 'false' },
    stars: { type: Number, required: true },
    content: { type: String, defaule: '' }
})

module.exports = mongoose.model('Comment', commentSchema)