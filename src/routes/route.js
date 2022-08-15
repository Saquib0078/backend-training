const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const userModel = require('../Models/userModel');
const userControllers=require('../Controllers/userControllers')

const router = express.Router();



router.post('/postBooks',userControllers.UserBooks)

router.get('/getBooks',userControllers.getBooks)


module.exports = router;
// adding this comment for no reason