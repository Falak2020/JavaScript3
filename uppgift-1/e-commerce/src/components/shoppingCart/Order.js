import React from 'react'
import OrderDetails from './OrderDetails'

const Order = ({order}) => {
    
    
    
    return (
        <div  >
            <div className="card mt-5 p-3">
                <h3>Order Number:{order.orderNumber}</h3> 
                {
                 order.paid? <h4 className="text-success">status : paid</h4>:''
                
                }
                {
                 order.completed?<h4 className="text-success">completed</h4>:''   
                }
              
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
