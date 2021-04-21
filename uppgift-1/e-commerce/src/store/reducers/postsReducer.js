import actiontypes from '../actiontypes'

let initState = {
    posts:null,
    loading:true
}

const postsReducer = (state = initState, action)=>{
    switch(action.type){
      case actiontypes().posts.loading:
          return{
              ...state,
              loading:action.payload
          }

      case actiontypes().posts.setPosts:
          return {
              ...state, 
              posts:action.payload
            } 
            
      default:
          return state
        
    }
}

export default postsReducer