import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Cartdetails from '../components/shoppingCart/Cartdetails'
import Order from '../components/shoppingCart/Order'
import {getUserCart} from '../store/actions/shoppingAction'

const Orders = () => {

    const orders = useSelector(state => state.shoppingCart.doneOrders)
    const shoppingCart = useSelector(state => state.shoppingCart.shoppings)
    const isPaid = useSelector(state => state.shoppingCart.paid)

    const totalPrice = useSelector(state => state.shoppingCart.totalPrice)
    const _id = useSelector(state => state.userReducer.userId)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserCart(_id))
    }, [dispatch])
    
    return (
        <div>
            {shoppingCart.length>0?<h2>My current orders</h2>:''}

            { shoppingCart.length>0?shoppingCart.map(item => (<Cartdetails key={item.shop._id} item={item} />))
             : <h3>Your shopping cart is empty</h3> 
             
            }
            {
                (totalPrice>0) &&<strong className="card p-3 text-center">Total Price={totalPrice}</strong>
      
            }
            
            {
               isPaid?<h5 className="text-success"> status : paid</h5>:''
               
            }
            {      
               orders.length>0?
               orders.map(order => (<Order key ={order.orderNumber} order={order} />))
               :''
            }
        </div>
    )
}

export default Orders
