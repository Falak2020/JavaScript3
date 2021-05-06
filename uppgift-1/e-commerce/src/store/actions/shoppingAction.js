
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
//Send users shopping cart to DB

 export const postCart = (payload)=>{
     return dispatch =>{

        let id = payload._id 
        
        axios.get('/shoppings/'+id)//if there is an object in db with the same id then make update otherwise send the data
        .then(res=>{
         
          
      if(res.data.notdone){

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
        
       axios.post('/shoppings/add',{
         _id:payload._id,
         cartContents:payload.cart
         },
         {headers:{'Authorization': `Bearer ${payload.token}`}})
      
      .then(res=>{
        console.log('send new')
      })
      } 
    }) 
    .catch(()=>{
      axios.post('/shoppings/add',{
        _id:payload._id,
        cartContents:payload.cart
        },
        {headers:{'Authorization': `Bearer ${payload.token}`}})
     
     .then(res=>{
       console.log('send new')})
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
  
   
        axios.get('/shoppings/'+payload._id)
        
        .then(res=>{
         
          if(res.data){
           let orderNumber=res.data.notdone.orderNumber   
           axios.patch('/shoppings/'+ payload._id,{
            orderNumber,
            cartContents:payload.shoppingCart,
            paid:true ,
            completed:false    
           },

           {headers:{'Authorization': `Bearer ${payload.token}`}} )
           
           .then(res=>console.log('paid'))
           }})
      
 
        
}
 
//change order to completed i DB

 export const changeToCompleted=(payload)=>{
   
   return dispatch => {
    
    axios.patch('/shoppings/admin/'+payload._id,{
     
      cartContents:payload.cart
      
    },
    
   {headers:{'Authorization': `Bearer ${payload.token}`}} )
   .then(res=>console.log('update'))
   
   axios.put('/users/messages/'+payload._id,{
    message:'Your order is completed'
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




