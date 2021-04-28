import React from 'react'
import { useSelector } from 'react-redux'
import Cartdetails from '../components/shoppingCart/Cartdetails'
import Order from '../components/shoppingCart/Order'
const Orders = () => {

    const orders = useSelector(state => state.shoppingCart.doneOrders)
    const shoppingCart = useSelector(state => state.shoppingCart.shoppings)
    const totalPrice = useSelector(state => state.shoppingCart.totalPrice)
    
    return (
        <div>
            <h2>My current orders</h2>

             { shoppingCart.length>0?shoppingCart.map(item => (<Cartdetails key={item.shop._id} item={item} />))
             : <h3>Your sgopping cart is empty</h3> 
             
             }
             {
                (totalPrice>0) &&<strong className="card p-3 text-center">Total Price={totalPrice}</strong>
      
             }


             {      
               orders.length>0?
               orders.map(order => (<Order key ={order.index} order={order} />))
               :''
            }
        </div>
    )
}

export default Orders
