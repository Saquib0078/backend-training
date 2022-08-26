const { count } = require("console")
const ProductModel= require("../models/ProductModel")

const createProduct= async function (req, res,next) {
    let data = req.body
    let ProductPrice = data.price
    if(!ProductPrice) return res.send({msg: 'price is mandatory in the request'})

    let savedData= await ProductModel.create(data)
    res.send({data: savedData})
}



module.exports.createProduct= createProduct
