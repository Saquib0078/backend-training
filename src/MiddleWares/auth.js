
const jwt = require("jsonwebtoken");
const userModel= require("../models/userModel")

const loginUser1 = async function (req, res,next) {
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
  
    
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "plutonium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium-My-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token });
    next()
  };



  
  
  
module.exports.loginUser1 = loginUser1;
