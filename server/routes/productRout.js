const express=require("express")
const router=express.Router()
const productController=require("../controlers/ProductControllers")
const verifyJWT=require("../middleware/verifyJWT")
const adminVerify=require("../middleware/adminVerify")
router.get("/",productController.getAllProducts)
router.use(verifyJWT);
router.get("/id/:id",productController.getProductById)
router.post("/add",adminVerify,productController.addProduct)
router.delete("/delete/:id",adminVerify,productController.deleteProduct)
router.put("/update/:id",adminVerify, productController.updateProduct)
module.exports=router