
import actiontypes from '../actiontypes'

export const addToCart = product => {
    return{
       type:actiontypes().shoppingCart.addToCart,
       payload:product
    }
}

export const removeFromCart= id =>{
    return{
        type:actiontypes().shoppingCart.remove,
        payload:id
    }
}

export const deleteAll= id =>{
    return{
        type:actiontypes().shoppingCart.deleteAll,
        payload:id
    }
}
