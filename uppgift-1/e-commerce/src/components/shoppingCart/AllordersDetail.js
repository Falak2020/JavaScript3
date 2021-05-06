import React from 'react'
import Cartdetails from './Cartdetails'
import Order from './Order'
import { changeToCompleted, getAllCart } from '../../store/actions/shoppingAction'
import { useDispatch,useSelector } from 'react-redux'
import Paidorders from './Paidorders'

const AllordersDetail = ({order}) => {
    const dispatch = useDispatch()
   
    let doneOrder = order.done
    let paidOrders = order.paid
    let _id = order._id
   
    
    const PaidCart = (
        
        <div>
          
          {
            paidOrders? 
           
              paidOrders.map(order=>(<Paidorders key={order.orderNumber} order={order} doneOrder={doneOrder} _id={_id}/>))
              
            
            : <h3 className="text-center p-5 border">Your shopping cart is empty</h3>
           
            
          }
           
          {/* {
            currentCart.length >0? currentCart.map(item=>(<Cartdetails key={item.shop._id} item={item} />))
            : <h3 className="text-center p-5 border">Your shopping cart is empty</h3>
          } */}
       
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

           {/* <div>
            {
             doneOrder.length>0?
             doneOrder.map(order => (<Order key ={order.ON} order={order} />))
             :''
            } 
         </div>  */}
           {DoneOrders}

        </div>
    )
}

export default AllordersDetail
