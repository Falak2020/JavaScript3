const mongoDb=require('mongoose')

const userS=mongoDb.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    passwordHash: {type:String,required:true},
    created:{type:Date, default:Date.now},
    modified:{type:Date, default:Date.now},
    role:{type:String},
    messages:'',
   
})

module.exports=mongoDb.model('User',userS)