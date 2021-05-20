const actiontypes=()=>{
    return{
        products:{
            getProducts:'GET_PRODUCTS',
            loading:'LOADING',
            setProducts:'SET_PRODUCTS'
        },

        product:{
           
            loading:'LOADING',
            setProduct:'SET_PRODUCT',
            setResult:'SET_RESULT'
        },
        shoppingCart:{
            addToCart:'ADD_TO_CART',
            remove:'REMOVE_FROM_CART',
            deleteAll:'DELETE_ALL',
            addToDB:'ADD_TO_DB',
            getUserCart:'GET_USER_CART',
            setUserCart:'SET_USER_CART',
            setDoneorders:'SET_Done_ORDERS',
            setPaidOrders:'SET_PAID_ORDERS',
            setOrders:'SET_ORDERS',
            distroyShoppingCart:'DISTROY_SHOPPING_CART'
        },

        user:{
            logIn:'LOGIN',
            sugnUp:'SIGNUP',
            logError:'LOG_ERROR',
            regError:'REG_ERROR',
            logoutUser:'LOG_OUT_USER',
            deleteMessage:'DELETE_MESSAGE'
        }

        
    }
}

export default actiontypes