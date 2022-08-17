

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
        "author_id":{
            type:Number,
            required:true},
    "name":String,
        "price":Number,
        "ratings":Number,

}, { timestamps: true });


module.exports = mongoose.model('BookData', BookSchema) //users