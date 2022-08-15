
const userModel = require('../Models/userModel');

let UserBooks=async function(req,res){
    let booksData=req.body
    let books= await userModel.create(booksData)
    res.send({msg:booksData})
    
    }

    let getBooks=async function(req,res){
        let booksData= await userModel.find()
        res.send({msg:booksData})
        
        }
    

    module.exports.UserBooks=UserBooks  
      module.exports.getBooks=getBooks