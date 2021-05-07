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