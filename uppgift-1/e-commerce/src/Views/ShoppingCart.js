import React from 'react'
import { useSelector} from 'react-redux'
import Cartdetails from '../components/Cartdetails'
import {NavLink} from 'react-router-dom'
const ShoppingCart = () => {

    const shoppingCart = useSelector(state => state.shoppingCart.shoppings)
    const totalPrice = useSelector(state => state.shoppingCart.totalPrice)
    return (
        <div>
            {
              shoppingCart.length>0? shoppingCart.map(item => (<Cartdetails key={item.shop._id} item={item}/>))
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
