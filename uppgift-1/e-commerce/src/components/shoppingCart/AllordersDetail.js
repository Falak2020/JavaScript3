import React from 'react'
import Order from './Order'

import Paidorders from './Paidorders'

const AllordersDetail = ({order}) => {
   
   
    let doneOrder = order.done
    let paidOrders = order.paid
    let _id = order._id
   
    
    const PaidCart = (
        
        <div>
          
          {
            paidOrders? 
           
              paidOrders.map(order=>(<Paidorders key={order.orderNumber} order={order} doneOrder={doneOrder} _id={_id}/>))
              
            
            : <h3 className="text-center p-5 border">There is Nothing to be completed</h3>
            
          }
         </div>
      )
    
    const DoneOrders = (
      <div >
        <div className="bg-info p-4 text-center mt-5 text-light"><h2>Completed Orders</h2></div>
         
            {
             doneOrder.length>0?
             doneOrder.map(order => (<Order key ={order.orderNumber} order={order} />))
             :''
            } 
      </div> 
    )
    return (
        <div className="mt-5 p-5">
          <h4 >User Id: <span className="mark">{order._id}</span></h4> 

            {PaidCart}

           
           {DoneOrders}

        </div>
    )
}

export default AllordersDetail
