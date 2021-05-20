import actiontypes from '../actiontypes'

import axios from '../../axios'

export const getProduct = (id)=>{
    return async dispatch =>{
        dispatch(loading(true))

        const res = await axios.get('/products/'+id)
        
        dispatch(setProduct(res.data))
        dispatch(loading(false))
    }
}


export const loading = (payload) => {
    return {
        type:actiontypes().product.loading,
        payload
    }
}

export const setProduct = (payload) => {
    return{
       type:actiontypes().product.setProduct,
       payload
    }
}


////////////////////////7
export const addProduct=(payload)=>{
    return async dispatch =>{ 
    const res = await axios.post('/products/new',payload.Product, {headers:{'Authorization': `Bearer ${payload.token}`}})
    .then(res=> {
        console.log(res)
        if(res.data.statusCode===201)
           dispatch(setResult(true))
        else
          dispatch(setResult(false))
    })
    .catch((err)=>console.log(err))
    }
  }

  export const setResult = (payload) => {
    return{
       type:actiontypes().product.setResult,
       payload
    }
}
  