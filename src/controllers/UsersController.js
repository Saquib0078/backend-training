

const { count } = require("console")
const UserModel= require("../models/userModel")

const createUser= async function (req, res,next) {

  let data=req.body
 
    let savedData= await UserModel.create(data)

    res.send({data: savedData})
  
}






module.exports.createUser= createUser
