import actiontypes from '../actiontypes'

import axios from '../../axios'

export const login = (payload)=>{
   
    return async dispatch =>{
      
        dispatch(loading(true))
        const res = await axios.post('/users/login',payload)
        
        dispatch(setToken(res.data.token))  
        
        dispatch(loading(false))
    }
       

}


export const loading = (payload) => {
    return {
        type:actiontypes().user.loading,
        payload
    }
}

export const setToken = token => {
    return{
       type:actiontypes().user.logIn,
       payload:token
    }
}