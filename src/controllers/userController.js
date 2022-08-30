const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");


const createUser = async function (req, res) {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.send({ msg: savedData });
};


const updateUser = async function (req, res, next) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
        return res.send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
    next()
};

const getUserData = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ status: false, msg: "token must be present" })
    let decodedToken = jwt.verify(token, "functionup-plutonium-My-secret-key");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
        return res.send({ status: false, msg: "No such user exists" });
    res.send({ status: true, data: userDetails });
    next()
};

const deleteUser = async function (req, res, next) {

    let userId=req.params.userId
    let deletedUser= await userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
    if(!deletedUser) 
      return res.send({ status: false, msg: "No such user exists" });
    res.send({status:true,msg:deletedUser})
}






module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.createUser = createUser;
module.exports.deleteUser = deleteUser;

