import actiontypes from '../actiontypes'

let initState = {
    products:null,
    loading:true,
    filteredProducts:[]
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
              products:action.payload,
              filteredProducts:action.payload
            } 
      case actiontypes().products.searchVal:
          return{
              ...state,
              filteredProducts:state.products.filter(product => product.name.toLowerCase().match(action.payload.toLowerCase()))
          }
        
      default:
          return state
        
    }
}

export default productsReducer