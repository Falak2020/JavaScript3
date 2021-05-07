import actiontypes from '../actiontypes'

let initState = {
    products:null,
    loading:true
}

const productsReducer = (state = initState, action)=>{
    switch(action.type){
      case actiontypes().products.loading:
          return{
              ...state,
              loading:action.payload
          }

      case actiontypes().products.setProducts:
          return {
              ...state, 
              products:action.payload
            } 
            
      default:
          return state
        
    }
}

export default productsReducer