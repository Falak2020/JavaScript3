
const router=require('express').Router()
const products=require('../models/products/productmodel')
const auth=require('../authentication/auth')
router.get('/?',products.getProducts)
// router.post('/new',products.createP)
router.get('/:id',products.getone)
router.post('/new',auth.verifyToken, products.createP)
//router.patch('/:id',auth.verifyToken, products.updateProduct)

router.delete('/:id',auth.verifyToken, products.deleteP)

router.get('/price/sort', products.priceSort)

router.get('/limit/:num', products.limitProduct)
 

module.exports=router


