const express=require("express")
const router=express.Router()
const userController=require("../controlers/UserController")
router.get("/",userController.getAllUsers)
router.get("/id/:id",userController.getAllUserById)
router.post("/add", userController.addUser)
router.delete("/delete/:id",userController.deleteById)
module.exports=router
