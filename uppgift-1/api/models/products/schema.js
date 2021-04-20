mongoDb=require('mongoose')
const schema=mongoDb.Schema({
    name:{type:String,required:true,unique:true,min:3},
    short:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    created:{type:Date,default:Date.now},
    modified:{type:Date,default:Date.now}

})


module.exports=mongoDb.model('Product',schema)