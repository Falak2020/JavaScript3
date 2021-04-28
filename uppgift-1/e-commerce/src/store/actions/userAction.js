import actiontypes from '../actiontypes'

import axios from '../../axios'
import { getAllCart, getUserCart, setCart } from './shoppingAction'

export const login = (payload)=>{
   
    return  dispatch =>{
      
        try{
             axios.post('/users/login',payload)
               .then(res=>{
                   console.log(res)
                   if (res.status===200){
                     dispatch(errorLogMsg(false))
                     dispatch(setToken(res.data))
                    
                     dispatch(getUserCart(res.data.userId)) 
                     dispatch(getAllCart(res.data.token))
                   }
                   
                   else
                   dispatch(errorLogMsg(true))
                })
                .catch(err=>{
                    console.log(err)
                    dispatch(errorLogMsg(true))
                })
        }
         catch{dispatch(errorLogMsg(true))}
    }
          
}
       
///////////////////////////////////////////////////

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




export const errorLogMsg = (error) => {
    return {
        type:actiontypes().user.logError,
        payload:error
    }
}

export const setToken = token => {
    return{
       type:actiontypes().user.logIn,
       payload:token
    }
}


export const errorRegMsg = (error) => {
    return {
        type:actiontypes().user.regError,
        payload:error
    }
}


export const logoutUser=()=>{
    return dispatch =>{
       
        dispatch(setCart(null))
        
        dispatch(logout())

       
        
    }
}

export const logout=()=>{
    return{
        type:actiontypes().user.logoutUser,
        payload:null,
        
    }
}