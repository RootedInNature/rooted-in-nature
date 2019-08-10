var mongoose = require('mongoose');

var plantSchema = new mongoose.Schema({
    genus: String,
    species: String,
    image: String,
    commonName: String,
    description: String,
    family: String,
    comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },

});

module.exports = mongoose.model('Plant', plantSchema);