import actiontypes from '../actiontypes'

let initState = {
    post:null,
    loading:true
}

const postsReducer = (state = initState, action)=>{
    switch(action.type){
      case actiontypes().posts.loading:
          return{
              ...state,
              loading:action.payload
          }

      case actiontypes().post.setPost:
          return {
              ...state, 
              post:action.payload
            } 
            
      default:
          return state
        
    }
}

export default postsReducer