import actiontypes from '../actiontypes'


let initState={
    token:null,
    userId:null,
    logError:false,
    regError:false,
    status:'log in',
    role:'user',
}

const loginReducer= (state = initState,action) =>{
   
    switch(action.type){
        case actiontypes().user.logIn:
          
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                role: action.payload.role,
                status: 'log out',
            }
           
        case actiontypes().user.logError:
        
            return {
                ...state,
                token: null,
                logError: action.payload,
                status: 'log in',
            }
        

        case actiontypes().user.regError:
            return{
                ...state,
                regError:action.payload
            }

        case actiontypes().user.logoutUser:
          
            return {
                ...state,
                token: action.payload,
                userId: action.payload,
                role: 'user',
                status: 'log in',
                logError: false
            }
           
        default :
        return state
    }
}


export default loginReducer;