import actiontypes from '../actiontypes'

let initState = {
   shoppings:[],
   counter:0

}


const shoppingCart = (state = initState, action)=>{
    switch(action.type){
      case actiontypes().shoppingCart.addToCart:
          { 
            let exists=state.shoppings.find(item=>item.shop._id===action.payload.shop._id)
             
            if(exists){
                exists.quantity+=1      
              }
            else{ 
                state.shoppings.push(action.payload)
            }
            
            state.counter+=action.payload.quantity
            
            break;
        }
       

      default:
          return state
        
    }
}

export default shoppingCart