const jwt = require("jsonwebtoken");

const authenticate = function(req, req, next) {
    
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
    
    
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }
     req.loggedinUser=decodedToken.userId

    next()
}


const authorise = function(req, res, next) {
let requestedUserId=req.params.userId
if (requestedUserId !=req.loggedinUser)
return res.send({status:false,Msg:"permission denied"})

    next()
}






module.exports.authenticate=authenticate
module.exports.authorise=authorise