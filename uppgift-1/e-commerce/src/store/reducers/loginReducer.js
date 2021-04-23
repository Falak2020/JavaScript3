import actiontypes from '../actiontypes'


let initState={
    token:null,
    error:false
}

const loginReducer= (state = initState,action) =>{
    
    switch(action.type){
        case actiontypes().user.logIn:
            state.token=action.payload
            return state
        case actiontypes().user.error:
            return{
                ...state,
                error:action.payload
            }
        default :
        return state
    }
}


export default loginReducer;