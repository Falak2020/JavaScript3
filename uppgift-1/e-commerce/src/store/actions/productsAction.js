import actiontypes from '../actiontypes'

import axios from '../../axios'

export const getProducts = ()=>{
    return async dispatch =>{
        dispatch(loading(true))

        const res = await axios.get('/products')
        
        dispatch(setProducts(res.data))
        dispatch(loading(false))
    }
}


export const loading = (payload) => {
    return {
        type:actiontypes().products.loading,
        payload
    }
}

export const setProducts = (payload) => {
    return{
       type:actiontypes().products.setProducts,
       payload
    }
}