const bookModel = require('../Models/bookModel');
const AuthorModel = require('./AuthorModel');
const BookModel = require('./BookModel');

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
            let booksData= await bookModel.find ( { 'prices.indianPrice' : { $in : [ "100_INR", "200_INR", "500_INR" ] } } ).select({bookName:1,_id:0})
            res.send({msg:booksData})
        
        }
        let getBooksInYear=async function(req,res){
            let yearList= await bookModel.find({ year: req.body.year }).select({bookName:1,_id:0})
            res.send(yearList)
        }
           
        
        let getParticularBooks=async function(req,res){
            let user=req.body
            console.log(user)
            let books= await bookModel.find(user)
            res.send({msg:books})
        }
        let getRandomBooks=async function(req,res){
            let books= await bookModel.find({ $or: [  { StockAvailable: true },{totalPages : {$gt: "500"} }  ]})
            res.send({msg:books})
        }
//===============================================================================================================

        const addBook=async function(req,res){
          let data=req.body
          let newBooks=await BookModel.create(data)
          res.send({msg:newBooks})

        }
        const addAuthor=async function(req,res){
            let data=req.body
            let newBooks=await AuthorModel.create(data)
            res.send({msg:newBooks})
          }

//==================================================================================================
         const ChetanBhagat=async function(req,res){
            let Author=await AuthorModel.find({authorName:{$eq:"Chetan Bhagat"}}).select({author_id:1,_id:0})
            res.send({msg:Author})
          }
          const ChetanBhagatBooks=async function(req,res){
            let Author=await BookModel.find({author_id:1})
            res.send({msg:Author})
          }
        
          const AuthorTwoStates=async function(req,res){
            let Author=await BookModel.findOneAndUpdate(
                {$name:"Two states"},
                {$set:{price:100,upsert:true}}
            ).select({price:1,_id:0,author_id:1})
            res.send({msg:Author})
          }
          const FindAuthor=async function(req,res){
            let Author=await AuthorModel.find({author_id:1}).select({authorName:1,_id:0})
            res.send({msg:Author})
          }
          const FindBooks=async function(req,res){
            let Author=await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({author_id:1})
            // let newArr=AuthorModel.map((author_id)=>{
            //     return `${author_id} `
          //  })
            res.send({msg:Author})
          }

          
        
    module.exports.bookList=bookList
    module.exports.createBook=createBook
    module.exports.getBooksInYear=getBooksInYear
    module.exports.getXINRBooks=getXINRBooks
    module.exports.getRandomBooks=getRandomBooks
    module.exports.getParticularBooks=getParticularBooks

    module.exports.AuthorTwoStates=AuthorTwoStates
    module.exports.ChetanBhagat=ChetanBhagat
    module.exports.addBook=addBook
    module.exports.addAuthor=addAuthor
    module.exports.ChetanBhagatBooks=ChetanBhagatBooks
    module.exports.FindAuthor=FindAuthor
    module.exports.FindBooks=FindBooks

    