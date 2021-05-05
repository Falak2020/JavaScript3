const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');

const auth = require('../../authentication/auth')
exports.registerUser = (req, res) => {

  User.exists({ email: req.body.email }, (err, result) => {
    if (err) {
      return res.status(400).json(err)
    } else {

      if (result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Email address is already taken'
        })
      }
      else {

        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {

          if (err) {
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Failed when encrypting user password'
            })
          }


          const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            passwordHash: hash,
            role:req.body.role
          })
          newUser.save()
            .then(() => {
              res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'User is created successfully'
              })
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create user'
              })
            })
        })
      }
    }
  })

}

exports.login = (req, res) => {

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user == null) {
        return res.status(404).json({
          statusCode: 404,
          statusCode: false,
          message: 'Incorrect email or password',
          
        })
      }
      else {
        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
          if (err) {
            return res.status(400).json(err)
          }
          else {
            if (result) {

              //  return res.header('token',auth.generateToken(user)).send(auth.generateToken(user))
              res.status(200).json({
                statusCode: 200,
                statusCode: true,
                message: 'correct email ',
                token: auth.generateToken(user),
                username:user.firstName,
                userId:user._id,
                role:user.role,
                notice:user.messages
              })

            }
            else {
              return res.status(401).json({
                statusCode: 401,
                statusCode: false,
                message: 'in correct email '

              })
            }


          }

        })
      }
    })
    .catch(()=>{
     return res.status(500).json({
          statusCode:500,
          status:false,
          message:'can not login'
      })
   })
}

exports.updateUser = (req, res) => {
  let salt1 = bcrypt.genSaltSync(10);
 
  bcrypt.hash(req.body.passwordHash, salt1, (err, hash1) => {
   
    if (err) {
      return res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed when encrypting user password'
      })
    }
 
  User.updateOne( { _id: req.params.id }, {
    ...req.body,
    passwordHash:hash1,
    modified: Date.now()
  })
  .then(() => {
    res.status(200).json({
      statusCode: 200,
      status: true,
      message: 'user updated'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to update user'
    })
  })
 })
}


exports.message = (req, res) => {
  
 
  User.updateOne( { _id: req.params.id }, {
    messages:req.body.message,
    modified: Date.now()
  })
  .then(() => {
    res.status(200).json({
      statusCode: 200,
      status: true,
      message: 'user updated'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to update user'
    })
  })

}