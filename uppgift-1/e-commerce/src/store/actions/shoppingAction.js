
import actiontypes from '../actiontypes'

export const addToCart = (payload) => {
    return{
       type:actiontypes().shoppingCart.addToCart,
       payload
    }
}

