mongoDb=require('mongoose')
var ObjectId = mongoDb.Schema.Types.ObjectId;
const CartSchema = mongoDb.Schema({
    _id: {type: ObjectId, required:true},
    notdone:  {
       
       type:  {
             orderNumber:{type:Date,default:Date.now()},
             cart:[],
             paid:{type:Boolean,default:false},
             completed:{type:Boolean,default:false}
            }
        
      ,
        
        required:true
        
    },
    done:{
        type:[]
    },
    date: {
        type: Date,
        default: Date.now()
    },
    modified:{
        type:Date,
        default : Date.now()
    }
})

module.exports = mongoDb.model('Cart', CartSchema)
