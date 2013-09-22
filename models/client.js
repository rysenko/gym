var mongoose = require('mongoose');

var Client = mongoose.model('Client', {
    name: String,
    age: Number,
    sex: {type: String, enum: ['Man', 'Woman']}
});

module.exports = Client;