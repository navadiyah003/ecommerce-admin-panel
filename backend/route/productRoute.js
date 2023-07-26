const router = require("express").Router()
const {addProduct,getProduct,deleteProduct,updateProduct, getProductById,searchProduct}= require("../controller/productController")

router.post("/addProduct",addProduct)

router.get("/getProduct",getProduct)
router.get("/getProductById/:id",getProductById)
router.get("/searchProduct/:key",searchProduct)
router.post("/updateProduct/:id",updateProduct)
router.post("/deleteProduct/:id",deleteProduct)

module.exports = router