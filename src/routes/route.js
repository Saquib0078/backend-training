const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const userModel = require('../Models/userModel');
const userControllers=require('../Controllers/userControllers')
const bookModel = require('../Models/bookModel');

const bookControllers=require('../Controllers/bookControllers')


const router = express.Router();



router.post('/postBooks',userControllers.UserBooks)

router.get('/getBooks',userControllers.getBooks)
router.post('/createBook',bookControllers.createBook)
router.get('/bookList',bookControllers.bookList)
router.post('/getBooksInYear',bookControllers.getBooksInYear)
router.get('/getXINRBooks',bookControllers.getXINRBooks)
router.get('/getRandomBooks',bookControllers.getRandomBooks)
router.post('/getParticularBooks',bookControllers.getParticularBooks)


router.post('/addBook',bookControllers.addBook)
router.post('/addAuthor',bookControllers.addAuthor)
router.get('/ChetanBhagat',bookControllers.ChetanBhagat)
router.get('/ChetanBhagatBooks',bookControllers.ChetanBhagatBooks)
router.get('/AuthorTwoStates',bookControllers.AuthorTwoStates)
router.get('/FindAuthor',bookControllers.FindAuthor)
router.get('/FindBooks',bookControllers.FindBooks)




module.exports = router;
// adding this comment for no reason