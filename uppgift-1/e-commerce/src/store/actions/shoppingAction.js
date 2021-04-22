
import actiontypes from '../actiontypes'

export const addToCart = product => {
    return{
       type:actiontypes().shoppingCart.addToCart,
       payload:product
    }
}

