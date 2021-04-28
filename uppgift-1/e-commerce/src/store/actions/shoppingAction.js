
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


export const  getUserCart=(id)=>{
   
    return dispatch  => {
     axios.get('/shoppings/'+id)
    .then((res)=>{
      if(res.data)
        dispatch(setCart(res.data.notdone.cart))

    })   
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
      cartContents:payload.cart,
      completed:true},
    
   {headers:{'Authorization': `Bearer ${payload.token}`}} )
   .then(res=>console.log('update'))

  }
 }
  



  export const setCart = data => {
    return{
       type:actiontypes().shoppingCart.setUserCart,
       payload:data
    }
}