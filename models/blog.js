var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    title: String,
    image: String,
    body: String,
    date: {type:Date, default: Date.now},
    comments: [
        {
            // Use reference to the comment to get from the database (doesnt store actual comment)
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

module.exports = mongoose.model('Blog', blogSchema);

