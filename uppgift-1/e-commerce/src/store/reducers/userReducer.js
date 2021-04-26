import actiontypes from '../actiontypes'


let initState={
    token:null,
    userId:null,
    logError:false,
    regError:false,
    status:'log in'
}

const loginReducer= (state = initState,action) =>{
    
    switch(action.type){
        case actiontypes().user.logIn:
            {
             state.token=action.payload.token
             state.userId=action.payload.userId
             state.status='log out'
             state.logError=false
            return state
            }
           
        case actiontypes().user.logError:
            {
                state.token=null
                state.logError=action.payload
                state.status='log in'
                return state
            }
        

        case actiontypes().user.regError:
            return{
                ...state,
                regError:action.payload
            }
           
        default :
        return state
    }
}


export default loginReducer;