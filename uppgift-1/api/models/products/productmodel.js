const mongoDb=require('mongoose')
const Product=require('./schema')

exports.getProducts=(req,res)=>{
    Product.find()
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(500).json(err))
}
exports.getone=(req,res)=>{
    Product.findOne({_id:req.params.id})
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(500).json(err))
}

exports.createP=(req,res)=>{
  Product.findOne({name:req.body.name})
   .then(exists=>{
    if(exists){
        res.sendStatus(400).json({
            statusCode:400,
            status:false,
            message:'A product is already exists update it instead'
        })
   }
       
    const  product=new Product({
           name:  req.body.name,
           short: req.body.short,
           desc:  req.body.desc,
           price: req.body.price,
           image: req.body.image
       })
       product.save()
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
               message:'can not creat the product'
           })
        })
   })
}

exports.updateProduct = (req, res) => {
  
    Product.updateOne( { _id: req.params.id }, {
      ...req.body,
      modified: Date.now()
    })
    .then(() => {
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'Product updated'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to update product'
      })
    })
  
  }
  exports.deleteP=(req,res)=>{
    
      Product.deleteOne({_id:req.params.id})
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


      //return limit
      exports.limitProduct=(req,res)=>{
        let limitnumber=parseInt(req.params.num)
        // console.log(limitnumber)
         Product.find()
         .limit(limitnumber)//när jag skrivier ett nummer funkar det bra men inte när jag tar from params
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json(err))
    }


    exports.priceSort=(req,res)=>{
     
       Product.find()
        .sort({price:1})
        .then(data=>{
          res.status(200).json(data)
        })
        .catch(
          err=>{
            res.status(500).json(err)  
          })
      }
      
