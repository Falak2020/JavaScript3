import React from 'react'
import { useSelector } from 'react-redux'
import AllordersDetail from '../components/shoppingCart/AllordersDetail'
const AllOrders = () => {

    const allOrders = useSelector(state => state.shoppingCart.allOrders)
   
    return (
        <div>
            {
              allOrders.length>0? allOrders.map(order=>(<AllordersDetail key={order._id} order={order}/>)) 
              :'' 
            }
        </div>
    )
}

export default AllOrders
