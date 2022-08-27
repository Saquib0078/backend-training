const { validate } = require("../models/OrderModel")
const OrderModel = require("../models/OrderModel")
const ProductModel = require("../models/ProductModel")
const userModel = require("../models/userModel")



  
    

const mid2=  function  ( req, res, next) {
  const user=req.headers.isfreeappuser
  if(!user){
      return res.send({msg:"the request is missing a mandatory header"}) }

      let bool=req.body['isFreeAppUser']= Boolean(user)  
  next()
}

const mid1= async function ( req, res, next) {
let data=req.body
  let UserId = await userModel.findById(data.userId)
  let ProductId = await ProductModel.findById(data.productId)
  const user=req.headers

  if(!UserId) {
    return res.send({status: false, msg: "UserId id is not valid"})
}else if(!ProductId){
  return res.send({status: false, msg: "ProductId id is not valid"})
}

let specificUser=await userModel.findById(data.userId)
if (!specificUser){
  return res.send ({status:false,msg:"User Not Exists"})

}
let Product=await ProductModel.findById(data.productId)
if (!Product){
  return res.send ({status:false,msg:"Product Not Exists"})
}else if(user.isfreeappuser===true){
let Orderdata=req.body
Orderdata.amount=0
Orderdata.isFreeAppUser=true
await OrderModel.create(Orderdata)
return res.send({msg:"Product purchaised Successfully"})
}else{  let Ubalance=specificUser.balance
         let productPrice=Product.price
         if (productPrice<Ubalance){
          let remainingBalance=Ubalance-productPrice
          await userModel.updateOne({_id:data.userId},{$set:{balance:remainingBalance}})
          let Orderdata=req.body
          Orderdata.amount=productPrice
          Orderdata.isFreeAppUser=false
          await OrderModel.create(Orderdata)
          return res.send({msg:"Product purchaised Successfully"})
         }else{
          res.send({status:false,Msg:"User doesnt have Enough balance"})
         }

}
  next()
  }


module.exports.mid1= mid1
module.exports.mid2= mid2
