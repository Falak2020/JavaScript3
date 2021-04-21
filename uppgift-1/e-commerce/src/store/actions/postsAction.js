import actiontypes from '../actiontypes'

import axios from '../../axios'

export const getPosts = ()=>{
    return async dispatch =>{
        dispatch(loading(true))

        const res = await axios.get('/products')
        
        dispatch(setPosts(res.data))
        dispatch(loading(false))
    }
}


export const loading = (payload) => {
    return {
        type:actiontypes().posts.loading,
        payload
    }
}

export const setPosts = (payload) => {
    return{
       type:actiontypes().posts.setPosts,
       payload
    }
}