const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/UsersController")
const OrderController= require("../controllers/OrderController")
const ProductController= require("../controllers/ProductController")

const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})




router.post("/createOrder",commonMW.mid2,commonMW.mid1, OrderController.createOrder  )

router.post("/createUser",commonMW.mid2, UserController.createUser)

router.post("/createProduct",ProductController.createProduct)








module.exports = router;