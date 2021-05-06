const mongoDb=require('mongoose')
const Card=require('./cartSchema')
var ObjectId = require('mongodb').ObjectId;


exports.getone=(req,res)=>{
  Card.findOne({_id:req.params.id})
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
}

exports.getAll=(req,res)=>{
  Card.find()
  .then(data=>res.status(200).json(data))
  .catch(err=>res.status(500).json(err))
}

exports.saveShoppings=(req,res)=>{

 const collection = new Card({

    _id:req.body._id,
    notdone:{
      orderNumber:Date.now(),
      cart:req.body.cartContents,
      paid:false,
      completed:false
    }
    
   })
    collection.save()
    .then(()=>{
     res.status(201).json({
         statusCode:201,
         status:true,
         message:'successful'
     })
    })

     .catch(()=>{
        res.status(500).json({
            statusCode:500,
            status:false,
            message:'can not add to DB'
        })
     })
   
}

exports.updateCart = (req, res) => {
  // let id1= new ObjectId(req.params.id)
  
    Card.updateOne( { _id:req.params.id }, {
      notdone:{
        orderNumber:req.body.orderNumber,
        cart:req.body.cartContents,
        paid:req.body.paid,
        completed:req.body.completed
      },
      
      modified: Date.now()
      })
      .then(() => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'The shopping cart is updated'
        })
      })
      .catch(() => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update the shopping cart'
        })
      })
    
    }


    exports.deleteOrder=(req,res)=>{
      
      Card.deleteOne({_id:req.params.id})
      .then(()=>res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'Deleted'
      })
    )
      .catch(() => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: ' Failed to delete'
        })
       } )
    }

  exports.CompletedOrder = (req, res) => {

  

    Card.updateOne( { _id:req.params.id }, {
      notdone:{cart:[]},
      paid:[],
      done: [...req.body.cartContents]
        
      ,
        
      modified: Date.now()})
      
      .then(() => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'The shopping cart is updated'
        })

        
      })
      .catch((err) => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to update the shopping cart'
        })
      })
    
    }

      

exports.paidOrder = (req, res) => {

  Card.updateOne( { _id:req.params.id }, {
    notdone:{cart:[]},
    
    paid: [...req.body.paidOrders]
      
    ,
      
    modified: Date.now()})
    
    .then(() => {
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'The shopping cart is updated'
      })

      
    })
    .catch((err) => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to update the shopping cart'
      })
    })
  
  }