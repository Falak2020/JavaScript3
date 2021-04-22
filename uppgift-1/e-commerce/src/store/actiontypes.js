const actiontypes=()=>{
    return{
        posts:{
            getPosts:'GET_POSTS',
            loading:'LOADING',
            setPosts:'SET_POSTS'
        },

        post:{
           
            loading:'LOADING',
            setPost:'SET_POST'
        },
        shoppingCart:{
            addToCart:'ADD_TO_CART',
            remove:'REMOVE_FROM_CART',
            deleteAll:'DELETE_ALL'
        }

        
    }
}

export default actiontypes