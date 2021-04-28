import actiontypes from '../actiontypes'


let initState = {
   shoppings:[],
   counter:0,
   totalPrice:0
}



const shoppingCart = (state = initState, action)=>{

 
  
    switch(action.type){
      //Add to Cart
      case actiontypes().shoppingCart.addToCart:
          { 
           let _product = {
              shop:action.payload,
              quantity:1 
            }
          
            let exists=state.shoppings.find(item=>item.shop._id === action.payload._id)
             
            exists?
                exists.quantity+=1      
                
                : state.shoppings.push(_product)
         
            state.counter=cartAmount(state.shoppings)
            state.totalPrice=totalPrice(state.shoppings)
             
          return state;
        }

  // Remove from cart

      case actiontypes().shoppingCart.remove:
        {
    

          let exists=state.shoppings.find(item=>item.shop._id === action.payload)
          
          exists.quantity===1
          ?
           state.shoppings=state.shoppings.filter(item => item.shop._id !== action.payload)
          : 
          exists.quantity -= 1
          
          
          state.counter=cartAmount(state.shoppings)
          state.totalPrice=totalPrice(state.shoppings)

          return state
      }
// Delete all item
      case actiontypes().shoppingCart.deleteAll:
        {
          state.shoppings=state.shoppings.filter(item => item.shop._id !== action.payload)
          state.counter=cartAmount(state.shoppings)
          state.totalPrice=totalPrice(state.shoppings)
          return state
        }
      case actiontypes().shoppingCart.setUserCart:
       {
          
          state.shoppings=action.payload
          state.counter=cartAmount(state.shoppings)
          state.totalPrice=totalPrice(state.shoppings)
          return state
        }
      default:
          return state
        
    }
}

const cartAmount=(shoppings)=>{
  let total=0
  shoppings.forEach(element => {

    total+= element.quantity
    
  });
  return total
}

const totalPrice=(shoppings)=>{
  let total=0
  if(shoppings.length>0){
    shoppings.forEach(element => {

    total += element.shop.price*element.quantity
    
   });
  }
  
  return total
}

export default shoppingCart