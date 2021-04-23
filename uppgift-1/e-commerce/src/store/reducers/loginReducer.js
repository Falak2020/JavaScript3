import actiontypes from '../actiontypes'


let initState={
    token:null,
    loading:true
}

const loginReducer= (state = initState,action) =>{
    
    switch(action.type){
        case actiontypes().user.logIn:
            state.token=action.payload
            return state
        case actiontypes().user.loading:
            return{
                ...state,
                loading:action.payload
            }
        default :
        return state
    }
}


export default loginReducer;