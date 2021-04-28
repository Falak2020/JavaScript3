import React from 'react'
import Order from './Order'
const Details = ({orders}) => {
    return (
        <div>
          {
             orders.length>0?
             orders.map(order => (<Order key ={order.index} order={order} />))
             :''
            
          }  
        </div>
    )
}

export default Details
