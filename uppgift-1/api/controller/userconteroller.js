const router = require('express').Router();
const userModel = require('../models/users/usermodel');

router.post('/register', userModel.registerUser);
router.post('/login', userModel.login);
router.put('/:id',userModel.updateUser)
router.patch('/messages/:id',userModel.message)
router.patch('/usermessages/:id',userModel.updateUserMsg)


module.exports = router;