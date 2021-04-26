
import actiontypes from '../actiontypes'
import axios from '../../axios'

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


export const  getUserCart=(id)=>{
           
    return dispatch  => {
     axios.get('/shoppings/'+id)
    .then((res)=>{
     console.log(res)
       dispatch(setCart(res.data.cartContents))
    })   
    }
    
  }


  export const setCart = data => {
    return{
       type:actiontypes().shoppingCart.setUserCart,
       payload:data
    }
}