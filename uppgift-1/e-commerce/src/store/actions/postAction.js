import actiontypes from '../actiontypes'

import axios from '../../axios'

export const getPost = (id)=>{
    return async dispatch =>{
        dispatch(loading(true))

        const res = await axios.get('/products/'+id)
        
        dispatch(setPost(res.data))
        dispatch(loading(false))
    }
}


export const loading = (payload) => {
    return {
        type:actiontypes().post.loading,
        payload
    }
}

export const setPost = (payload) => {
    return{
       type:actiontypes().post.setPost,
       payload
    }
}