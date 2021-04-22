import actiontypes from '../actiontypes'

let initState = {
   shoppings:[],
   counter:0

}


const shoppingCart = (state = initState, action)=>{
    switch(action.type){
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
             
          return state;
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
export default shoppingCart