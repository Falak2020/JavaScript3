import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Cartdetails from '../components/shoppingCart/Cartdetails'
import {NavLink} from 'react-router-dom'
import { changeToCompleted,getAllCart } from '../store/actions/shoppingAction'
const ShoppingCart = () => {
    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.shoppingCart.shoppings)
    const totalPrice = useSelector(state => state.shoppingCart.totalPrice)

    const _id = useSelector(state => state.userReducer.userId)
    const token = useSelector(state => state.userReducer.token)
    const role = useSelector(state => state.userReducer.role)
  
     
        
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
            {
               (totalPrice>0) &&<strong className="card p-3 text-center">Total Price={totalPrice}</strong>
     
            }
          
          
        </div>
    )
}

export default ShoppingCart
