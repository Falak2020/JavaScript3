const express=require('express')
// const { model } = require('mongoose')
const app = express()
 const cors=require('cors')
const productController=require('./controller/controllers')
const userController=require('./controller/userconteroller')
const cartController = require('./controller/cartController')
 app.use(cors())
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With")
//     if(req.method === "OPTIONS") {
//       res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
//     }
//     next()
// })
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/products',productController)

app.use('/api/users',userController)

app.use('/api/shoppings',cartController)
module.exports = app

