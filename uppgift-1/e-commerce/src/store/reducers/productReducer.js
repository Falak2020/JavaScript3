import actiontypes from '../actiontypes'

let initState = {
    product:null,
    loading:true
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
            
      default:
          return state
        
    }
}

export default postsReducer