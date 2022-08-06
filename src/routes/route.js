const express = require('express');
const abc = require('../introduction/intro');
const  logger  = require('../logger/logger');
const router = express.Router();
const  helper  = require('../util/helper');
const formatter =require('../validator/formatter')


router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    // res.send('My second ever api!')
   console.log('Welcome to my application. I am'+'   ' +logger.welcome+'  '+'and a part of FunctionUp Plutonium cohort.')
    helper.name()
    helper.Month()
    helper.Batch()
    formatter.fun1()
    formatter.fun2()
    formatter.fun3()
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason