
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
        dispatch(setCart(res.data.notdone))
      dispatch(setDoneorders(res.data.done))
      dispatch(setPaidOrders(res.data.paid))
    })  
    .catch(err=>console.log(err)) 
    }
    
  }
// Bring All orders for all users to admin
  export const  getAllCart=(token)=>{
   
    return dispatch  => {
     axios.get('/shoppings/', {headers:{'Authorization': `Bearer ${token}`}})
    .then((res)=>{
     dispatch(setOrders(res.data))
     
    })  
    .catch(err=>console.log(err)) 
    }
    
  }
  //
  export const postToShoppingCart=(payload) =>{
   console.log(payload)
    axios.post('/shoppings/add',{
      _id:payload._id,
      cartContents:payload.cart,
      userName:payload.userName,
      
      },
      {headers:{'Authorization': `Bearer ${payload.token}`}})
   
   .then(res=>{
     console.log('send new')
     
   })
  }
//Send users shopping cart to DB

 export const postCart = (payload)=>{
     return dispatch =>{

        let id = payload._id 
        
      axios.get('/shoppings/'+id)//if there is an object in db with the same id then make update otherwise send the data
      .then(res=>{
         
          
      if(res.data.notdone){
        // order is already existed
         if(res.data.notdone.orderNumber){
               let orderNumber=res.data.notdone.orderNumber
               axios.patch('/shoppings/'+id,
                { orderNumber,
                  cartContents:payload.cart,
                  
                  paid:false,
                  completed:false
                },
               {headers:{'Authorization': `Bearer ${payload.token}`}} )
                .then(res=>console.log('update'))
            }

            // New Order
            else{
              axios.patch('/shoppings/'+id,
              { 
                orderNumber:Date.now(),
                cartContents:payload.cart,
                paid:false,
                completed:false
              },
             {headers:{'Authorization': `Bearer ${payload.token}`}} )
              .then(res=>console.log('update'))
            }
          
      }
      else{
        // New Order the user is shopping for the first time
        postToShoppingCart(payload)
      
      } 
    }) 
    //New Order in DB
    .catch(()=>{
      postToShoppingCart(payload)
    
     }) 

   }
}
//Delete order from DB
export const deleteDB=(payload) =>{
    
       axios.delete('/shoppings/'+payload._id,
      {headers:{'Authorization': `Bearer ${payload.token}`}})
       .then(res=>{
       console.log('deleted')})
 }

//Change order to paid i DB

 export const changeToPaid=(payload)=>{
  
   axios.patch('/shoppings/pay/'+payload._id,{
     
    paidOrders:payload.paidOrders
    },
  
    {headers:{'Authorization': `Bearer ${payload.token}`}} )
   .then(res=>console.log('update'))
}
 
//change order to completed i DB

 export const changeToCompleted=(payload)=>{
   
   return dispatch => {
    
    axios.patch('/shoppings/admin/'+payload._id,{
     
      cartContents:payload.cart,
      paidOrders:payload.paidOrders
      
    },
    
    {headers:{'Authorization': `Bearer ${payload.token}`}} )
     .then(res=>console.log('update'))
   
    axios.put('/users/messages/'+payload._id,{
    message:` ${payload.orderNumber} `
   })
    .then(res=>console.log('message sent to user'))
 // Bring the last copy of Allorders
  
   dispatch(getAllCart(payload.token))
  }
 }
  

// Save the shopping cart which found in DB in users shoppingcart
 export const setCart = data => {
    return{
       type:actiontypes().shoppingCart.setUserCart,
       payload:data
    }
}
// Save Done order 

export const setDoneorders = data => {
  return{
     type:actiontypes().shoppingCart.setDoneorders,
     payload:data
  }
}
// SAVE PAID ORDERS
export const setPaidOrders = data => {
  return{
     type:actiontypes().shoppingCart.setPaidOrders,
     payload:data
  }
}

// Save all orders 
export const setOrders = data => {
  return{
     type:actiontypes().shoppingCart.setOrders,
     payload:data
  }
}
// distroy shopping cart when the user log out

export const distroyShoppingCart = () => {
  return{
     type:actiontypes().shoppingCart.distroyShoppingCart,
     payload:null
  }
}




