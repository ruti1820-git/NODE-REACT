const express=require("express")
const router=express.Router()
const basketController=require("../controlers/basketControolers")
const verifyJWT=require("../middleware/verifyJWT")
router.use(verifyJWT)

router.get("/",basketController.getAllBasket)
router.post("/add",basketController.addBasket)
router.delete("/delete/:id",basketController.deleteBasket)

module.exports=router
