const router = require('express').Router();
const userModel = require('../models/users/usermodel');

router.post('/register', userModel.registerUser);
router.post('/login', userModel.login);
router.put('/:id',userModel.updateUser)
router.put('/messages/:id',userModel.message)


module.exports = router;