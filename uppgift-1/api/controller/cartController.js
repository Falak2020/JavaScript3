const router = require('express').Router();
const cartModel = require('../models/shoppingCart/cartModel');
const auth=require('../authentication/auth')
// router.post('/add',cartModel.saveProduct);




router.patch('/:id',auth.verifyToken,cartModel.updateCart )
router.get('/:id',cartModel.getone)
router.post('/add',auth.verifyToken, cartModel.saveShoppings)
router.delete('/:id',auth.verifyToken,cartModel.deleteOrder)
module.exports = router;