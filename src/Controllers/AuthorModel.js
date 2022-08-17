const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema( {
    "author_id":{
        type:Number,
        required:true},
    "authorName":String,
    "age":Number,
    "address":String
}, { timestamps: true });


module.exports = mongoose.model('AuthorData', AuthorSchema) //users