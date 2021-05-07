import actiontypes from '../actiontypes'
import axios from '../../axios'
import { getAllCart, getUserCart } from './shoppingAction'

//Log in
export const login = (payload)=>{
  
    return async dispatch =>{
        
        try{
            const res= await  axios.post('/users/login',payload)

               
                   if (res.status===200){
                     dispatch(errorLogMsg(false))
                     dispatch(setToken(res.data))
                     console.log(res.data)
                     dispatch(getUserCart(res.data.userId)) 
                     dispatch(getAllCart(res.data.token))
                      
                   }
                   
                   else{
                       dispatch(errorLogMsg(true))
                      
                   }                  
        }
         catch{dispatch(errorLogMsg(true))}
    }
          
}
       
///////////////////////////////////////////////////
//Sign Up
export const signUp= (payload) => {
    let user={
        email:payload.email,
        password:payload.password
    }
   
    return async dispatch =>{
        try{
        const res= await axios.post('/users/register',payload)
          
          if (res.status===201){
                dispatch(errorRegMsg(false))
                dispatch(login(user))
            }
            
          else
          dispatch(errorRegMsg(true))   
    }
    catch{dispatch(errorRegMsg(true))}
 
}

}



// When the user information doesnot correct

export const errorLogMsg = (error) => {
    return {
        type:actiontypes().user.logError,
        payload:error
    }
}
// Save Token

export const setToken = token => {
    return{
       type:actiontypes().user.logIn,
       payload:token
    }
}

//When the user is already exists

export const errorRegMsg = (error) => {
    return {
        type:actiontypes().user.regError,
        payload:error
    }
}

// log out

export const logoutUser=()=>{
    return dispatch =>{
       
    
        dispatch(logout())
  }
}

export const logout=()=>{
    return{
        type:actiontypes().user.logoutUser,
        payload:null,
        
    }
}

export const readMsg = (_id) => {
    return dispatch => {
      axios.put('/users/messages/'+_id,{
      message:''
     
     })
     dispatch(deleteMessage())
    }
  }

  export const deleteMessage=()=>{
    return{
        type:actiontypes().user.deleteMessage,
        payload:null,
        
    }
}