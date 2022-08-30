const jwt = require("jsonwebtoken")

const tokenVerify = async function(req,res , next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    try{
        let decodedToken = jwt.verify(token, "functionup-plutonium-secret-key",);
        let user = decodedToken.userId
       // if(user != req.params.userId) return res.send({status:false,msg:"token is invalid"})
        next();
    }
    catch(err){
       return res.send(err.message)
    }
    
}
module.exports.tokenVerify=tokenVerify