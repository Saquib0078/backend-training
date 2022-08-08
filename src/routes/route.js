const express = require('express');
const abc = require('../introduction/intro');
const  logger  = require('../logger/logger');
const router = express.Router();
const  helper  = require('../util/helper');
const formatter =require('../validator/formatter')
const lodash=require('lodash')

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
     res.send('My second ever api!')
   console.log('Welcome to my application. I am'+'   ' +logger.welcome+'  '+'and a part of FunctionUp Plutonium cohort.')
    helper.name()
    helper.Month()
    helper.Batch()
    formatter.fun1()
    formatter.fun2()
    formatter.fun3()
    const month=['january','febraury','march','april','may','june','july','august','september','october','november','december']
    const chunked=lodash.chunk(month,3)
    console.log(chunked)
    const oddNumbers=[1,3,5,7,9,11,13,17,19,21]
    const odd=lodash.tail(oddNumbers)
    console.log(odd)

   const Array1=[1,2,3]
   const Array2=[3,4,5]
   const Array3=[4,6,9,65]
   const Array4=[2,5,8,4]
   const Array5=[1,89,65,2]

    const NewArray=lodash.union(Array1,Array2,Array3,Array4,Array5)
    console.log(NewArray)

    const object=   [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    const NewObj=lodash.fromPairs(object)
    console.log(NewObj)





});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason