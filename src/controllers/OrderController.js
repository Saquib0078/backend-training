const { count } = require("console")
const OrderModel= require("../models/OrderModel")

const createOrder= async function (req, res,next) {
    let data=req.body
    let savedData= await OrderModel.create(data)
      res.send({data: savedData})
      
}



module.exports.createOrder= createOrder
