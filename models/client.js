var mongoose = require('mongoose');

var Client = mongoose.model('Client', {
    name: String,
    age: Number,
    sex: {type: String, enum: ['man', 'woman']}
});

module.exports = Client;