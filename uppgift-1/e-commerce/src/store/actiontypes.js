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
            deleteAll:'DELETE_ALL',
            addToDB:'ADD_TO_DB',
            getUserCart:'GET_USER_CART',
            setUserCart:'SET_USER_CART',
            setDoneorders:'SET_Done_ORDERS',
            setOrders:'SET_ORDERS'
        },

        user:{
            logIn:'LOGIN',
            sugnUp:'SIGNUP',
            logError:'LOG_ERROR',
            regError:'REG_ERROR',
            logoutUser:'LOG_OUT_USER'
        }

        
    }
}

export default actiontypes