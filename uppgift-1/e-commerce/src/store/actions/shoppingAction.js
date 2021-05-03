
import actiontypes from '../actiontypes'
import axios from '../../axios'

export const addToCart =(product) => {
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

// BRING ALL ORDERS FOR THE USER FROM DB

export const  getUserCart=(id)=>{
   
    return dispatch  => {
     axios.get('/shoppings/'+id)
    .then((res)=>{
     
      if(res.data.notdone)
        dispatch(setCart(res.data.notdone.cart))
      dispatch(setDoneorders(res.data.done))
    })  
    .catch(err=>console.log(err)) 
    }
    
  }

  export const  getAllCart=(token)=>{
   
    return dispatch  => {
     axios.get('/shoppings/', {headers:{'Authorization': `Bearer ${token}`}})
    .then((res)=>{
     dispatch(setOrders(res.data))
     
    })  
    .catch(err=>console.log(err)) 
    }
    
  }

 export const postCart = (payload)=>{
     return dispatch =>{

        let id = payload._id 
        
        axios.get('/shoppings/'+id)//if there is an object in db with the same id then make update otherwise send the data
        .then(res=>{

       if(res.data){
           
            axios.patch('/shoppings/'+id,
            {cartContents:payload.cart},
             {headers:{'Authorization': `Bearer ${payload.token}`}} )
             .then(res=>console.log('update'))

        
      }
      else{
        console.log(payload.cart)
       axios.post('/shoppings/add',{
         _id:payload._id,
         cartContents:payload.cart},
         {headers:{'Authorization': `Bearer ${payload.token}`}})
      
      .then(res=>{
        console.log('send new')
      })
      } 
    }) 
   }
}

export const deleteDB=(payload) =>{
    
       axios.delete('/shoppings/'+payload._id,
      {headers:{'Authorization': `Bearer ${payload.token}`}})
       .then(res=>{
       console.log('deleted')})
 }


 export const changeToCompleted=(payload)=>{
   
   return dispatch => {

    axios.patch('/shoppings/admin/'+payload._id,{
     
      cartContents:payload.cart
      
    },
    
   {headers:{'Authorization': `Bearer ${payload.token}`}} )
   .then(res=>console.log('update'))
   
 // Bring the last copy of Allorders
   dispatch(getAllCart(payload.token))
  }
 }
  


 export const setCart = data => {
    return{
       type:actiontypes().shoppingCart.setUserCart,
       payload:data
    }
}

export const setDoneorders = data => {
  return{
     type:actiontypes().shoppingCart.setDoneorders,
     payload:data
  }
}

export const setOrders = data => {
  return{
     type:actiontypes().shoppingCart.setOrders,
     payload:data
  }
}