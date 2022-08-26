const { validate } = require("../models/OrderModel")
const OrderModel = require("../models/OrderModel")
const ProductModel = require("../models/ProductModel")
const userModel = require("../models/userModel")


const mid1= function ( req, res, next) {
    const valid= req.headers.isFreeAppUser
    let isFreeAppUser=false

    let data=req.body
    if(valid){
      return res.send({msg:'Order created'})
    }else if (!isFreeAppUser && data.balance>=100){
      res.send({msg:"done"})
    }else if(!isFreeAppUser && data.balance<100){
      res.send({msg:"none"})

    }
next()
  
    }

const mid2=  function  ( req, res, next) {
  const user=req.headers.isfreeappuser
  if(!user){
      return res.send({msg:"the request is missing a mandatory header"}) }

      req.body['isFreeAppUser'] = Boolean(user)  
  next()
}

const mid3= async function ( req, res, next) {
let data=req.body
  let UserId = await userModel.findById(data.userId)
  let ProductId = await ProductModel.findById(data.productId)
  if(!UserId) {
    return res.send({status: false, msg: "UserId id is not valid"})
}else if(!ProductId){
  return res.send({status: false, msg: "ProductId id is not valid"})
}
  next()
  }


module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
// module.exports.mid4= mid4
