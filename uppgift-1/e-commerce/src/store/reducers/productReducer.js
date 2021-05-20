import actiontypes from '../actiontypes'

let initState = {
    product:null,
    loading:true,
    result:false
}

const postsReducer = (state = initState, action)=>{
    switch(action.type){
      case actiontypes().product.loading:
          return{
              ...state,
              loading:action.payload
          }

      case actiontypes().product.setProduct:
          return {
              ...state, 
              product:action.payload
            } 
      case actiontypes().product.setResult:
          return{
              ...state,
              result:action.payload
          }
            
      default:
          return state
        
    }
}

export default postsReducer