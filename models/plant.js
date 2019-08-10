var mongoose = require('mongoose');

var plantSchema = new mongoose.Schema({
    genus: String,
    species: String,
    image: String,
    commonName: {type: String,
    default: ''},
    description: {type: String,
        default: ''},
    family: {type: String,
        default: ''},
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