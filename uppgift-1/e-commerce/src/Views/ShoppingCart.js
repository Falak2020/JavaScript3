import React,{ useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Cartdetails from '../components/shoppingCart/Cartdetails'
import {NavLink} from 'react-router-dom'
import { changeToPaid,getUserCart } from '../store/actions/shoppingAction'
const ShoppingCart = () => {
   
    const shoppingCart = useSelector(state => state.shoppingCart.shoppings)
    const currentCart = useSelector(state => state.shoppingCart.currentCart)

    const paidOrders = useSelector(state => state.shoppingCart.paidOrders)

    const totalPrice = useSelector(state => state.shoppingCart.totalPrice)
    const token = useSelector(state=>state.userReducer.token)
    const _id = useSelector(state => state.userReducer.userId)
    const dispatch = useDispatch()
   
    let Obj={
      
      ...currentCart,paid:true
    }
    
    const ToPaid=()=>{

      let payload={
        _id,
        paidOrders:[...paidOrders,Obj],
        token
    }
      
      changeToPaid(payload)
     
       
    } 
    useEffect(() => {
      dispatch(getUserCart(_id))
    }, [currentCart])
    return (
        <div>
            {
              (shoppingCart.length>0)? shoppingCart.map(item => (<Cartdetails key={item.shop._id} item={item}/>))
             
              : 
              <div className="card mt-5 p-4 text-center"> 
                <div className="card-header text-info"><i className="fas fa-shopping-bag"></i></div>
                <div className="card-body">
                      <p className="card-text">
                          Your Shopping Cart is empty - but it does not have to be
                      </p>
                      <NavLink exact to ='/' className="btn btn-primary">Continue Shopping</NavLink>
                 </div>       
              </div>
            
            }
            <div className="card p-3 ">
             
             {
               (totalPrice>0) &&<strong className="  text-center">Total Price={totalPrice}</strong>
     
            }
            
            <div className="text-center ">
              {
              (totalPrice>0) && <button className="btn btn-gray text-white w-50  mt-3 p-3 " onClick={ToPaid}>go to checkout</button>   
              }  
            </div>
        
         </div>   
        </div>
    )
}

export default ShoppingCart
