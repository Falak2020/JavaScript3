import React from 'react'
import Cartdetails from './Cartdetails'
import Order from './Order'
import { changeToCompleted, getAllCart } from '../../store/actions/shoppingAction'
import { useDispatch,useSelector } from 'react-redux'

const AllordersDetail = ({order}) => {
    const dispatch = useDispatch()
    let currentCart = order.notdone.cart
    let doneOrder = order.done
    
    
    const token = useSelector(state => state.userReducer.token)
  

    let Obj={
      // ON:order.notdone.orderNumber,
      // cart:currentCart,
      // completed:true
      ...order.notdone,completed:true
    }
   const ToCompleted=()=>{
    
      let payload={
        _id:order._id,
        cart:[...doneOrder,Obj],
        token:token
    }

    dispatch(changeToCompleted(payload))
    }
  
    const CurrentCart = (
        
        <div>
          <div className="text-end">
            {
            currentCart.length >0?  <button  className ="btn btn-info "onClick={ToCompleted}>Complete order</button>:''
            }
          </div>
           
          {
            currentCart.length >0? currentCart.map(item=>(<Cartdetails key={item.shop._id} item={item} />))
            : <h3 className="text-center p-5 border">Your shopping cart is empty</h3>
          }
       
           </div>
      )
    
    const DoneOrders = (
      <div>
            {
             doneOrder.length>0?
             doneOrder.map(order => (<Order key ={order.ON} order={order} />))
             :''
            } 
      </div> 
    )
    return (
        <div className="mt-5 card p-5">
          <h4 >User Id: <span className="mark">{order._id}</span></h4> 

            {CurrentCart}

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
