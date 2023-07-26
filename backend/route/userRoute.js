const router = require("express").Router()
const {addUser,UserLogin}= require("../controller/userController")

router.post("/addUser",addUser)

router.post("/userLogin",UserLogin)

module.exports = router