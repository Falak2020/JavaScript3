import actiontypes from '../actiontypes'

import axios from '../../axios'

export const login = (payload)=>{
   
    return  dispatch =>{
      
        try{
             axios.post('/users/login',payload)
               .then(res=>{
                   console.log(res)
                   if (res.data.statusCode){

                     dispatch(setToken(res.data.token))  
                   }
                   
                   else
                   dispatch(errormsg(true))
                })
                .catch(err=>{
                    console.log(err)
                    dispatch(errormsg(true))
                })
        }
         catch{dispatch(errormsg(true))}
    }
          
}
       




export const errormsg = (error) => {
    return {
        type:actiontypes().user.error,
        payload:error
    }
}

export const setToken = token => {
    return{
       type:actiontypes().user.logIn,
       payload:token
    }
}