import React from 'react'
import OrderDetails from './OrderDetails'

const Order = ({order}) => {
    
    return (
        <div  >
            <div className=" mt-5 p-3">

               <hr/>
                <h3>Order Number:{order.ON}</h3> 
                <h4 className="text-success">status : paid</h4>
                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
                 {
            
                    order.cart.map(item =>(<OrderDetails key={item.shop._id} item={item} />))
                 
                }      
                </div>
                
            </div>
            
        
        </div>
    )
}

export default Order
