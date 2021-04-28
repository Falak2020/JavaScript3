import React from 'react'
import Cartdetails from './Cartdetails'
import Details from './Details'
import Order from './Order'
const Allorders = ({order}) => {
console.log(order.done)
    let currentCart = order.notdone.cart
    let doneOrder = order.done
    return (
        <div className="mt-5">
         {
             
             currentCart.length >0? currentCart.map(item=>(<Cartdetails key={item.shop._id} item={item} />))
             :''
         }
         <div>
            {
             doneOrder.length>0?
             doneOrder.map(order => (<Order key ={order.index} order={order} />))
             :''
            } 
         </div>

        </div>
    )
}

export default Allorders
