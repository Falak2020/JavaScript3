mongoDb=require('mongoose')
var ObjectId = mongoDb.Schema.Types.ObjectId;
const CartSchema = mongoDb.Schema({
    _id: {type: ObjectId, required:true},
    cartContents: {
        type: [Object],
        required:true
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    modified:{
        type:Date,
        default : Date.now()
    }
})

module.exports = mongoDb.model('Cart', CartSchema)
