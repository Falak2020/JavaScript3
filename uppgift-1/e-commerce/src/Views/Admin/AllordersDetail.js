import React from 'react'
import Order from '../../components/shoppingCart/Order'

import Paidorders from '../../components/shoppingCart/Paidorders'

const AllordersDetail = (props) => {
   
   let order = props.location.state.usersOrder.order
   
    let doneOrder = order.done
    let paidOrders = order.paid
    let _id = order._id
   
    
    const PaidCart = (
        
        <div>
          <div className="bg-warning shadow  p-4 text-center mt-5 "><h2>Paid Orders</h2></div>
          {
            paidOrders? 
           
              paidOrders.map(order=>(<Paidorders key={order.orderNumber} order={order} doneOrder={doneOrder} _id={_id} paidOrders={paidOrders}/>))
              
            
            : <h3 className="text-center p-5 border">There is Nothing to be completed</h3>
            
          }
         </div>
      )
    
    // const DoneOrders = (
    //   <div >
    //     <div className="navbar-bg shadow  p-4 text-center mt-5 "><h2>Completed Orders</h2></div>
         
    //         {
    //          doneOrder.length>0?
    //          doneOrder.map(order => (<Order key ={order.orderNumber} order={order} />))
    //          :''
    //         } 
    //   </div> 
    // )
    return (
        <div className="mt-5 ">
          <h4  className="text-primary">User Id: <span className="text-dark">{order._id}</span></h4> 

            {PaidCart}

           
           {/* {DoneOrders} */}

        </div>
    )
}

export default AllordersDetail
