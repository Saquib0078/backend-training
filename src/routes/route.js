const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Middleware= require("../MiddleWares/auth.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login",Middleware.loginUser1)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)
router.post("/users/:userId", userController.deleteUser)



module.exports = router;
