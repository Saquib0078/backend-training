const { default: mongoose, models } = require("mongoose")


    let UserSchema = new mongoose.Schema({
        "title":String,
        "subtitle":String,
        "author":String,
        "pages":Number,
        "description":String,
        "website":String
      }, {timestamps: true});
      
     
    
module.exports=mongoose.model('author',UserSchema)
