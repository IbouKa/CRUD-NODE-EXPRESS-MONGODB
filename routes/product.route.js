const Product=require('../models/product.model.js')
const express=require('express')
const router=express.Router()
const {getProducts,getProductById,addProduct,deleteProduct,uptdateProduct} =require('../controllers/product.js')

router.get('/',getProducts);
router.get('/:id',getProductById);
router.get('/',addProduct);
router.put('/:id',uptdateProduct);
router.delete('/:id',deleteProduct);

module.exports = router;