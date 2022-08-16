const bookModel = require('../Models/bookModel');

let createBook=async function(req,res){
    let booksData=req.body
    let books= await bookModel.create(booksData)
    res.send({msg:books})
    
    }
    let bookList=async function(req,res){
        let books= await bookModel.find().select({bookName:1,authorName:1,_id:0})
        res.send({msg:books})
        
        }

    let getBooks=async function(req,res){
        let booksData= await userModel.find()
        res.send({msg:booksData})}

        let getXINRBooks=async function(req,res){
            let booksData= await bookModel.find().select({'prices.indianPrice':1,_id:0})
            res.send({msg:booksData})
        
        }
        let getBooksInYear=async function(req,res){
            let year=req.query.Year
            let books= await bookModel.find(year)
            res.send({msg:books})
        }
        let getRandomBooks=async function(req,res){
            let books= await bookModel.find({ $or: [ {'totalPages' : 500 } , { 'StockAvailable': true } ]})
            res.send({msg:books})
        }
        
    module.exports.bookList=bookList
    module.exports.createBook=createBook
    module.exports.getBooksInYear=getBooksInYear
    module.exports.getXINRBooks=getXINRBooks
    module.exports.getRandomBooks=getRandomBooks
