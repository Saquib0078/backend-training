const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    "bookName": String, 
    "authorName": String, 
    "tags": [String],
    "Year":{type:Number,default:2021},
   "StockAvailable": Boolean,
    "prices": {
        "indianPrice": String,
        "europePrice": String,
    },
    "totalPages":Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

