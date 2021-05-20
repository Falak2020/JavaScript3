import actiontypes from '../actiontypes'


let initState={
    token:null,
    userId:null,
    logError:false,
    regError:false,
    status:'log in',
    role:'user',
    message:'',
    userName:'',
    userEmail:'',
    
}

const loginReducer= (state = initState,action) =>{
   
    switch(action.type){
        case actiontypes().user.logIn:
          
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                role: action.payload.role,
                message: action.payload.notice,
                userName:action.payload.username,
                userEmail:action.payload.userEmail,
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
                userEmail:'',
                logError: false
            }


        case actiontypes().user.deleteMessage:
            return{
                ...state,
                message:action.payload
            }


        default :
        return state
    }
}


export default loginReducer;