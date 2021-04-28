import React from 'react'
import Cartdetails from './Cartdetails'
import Details from './Details'
import Order from './Order'
import { changeToCompleted } from '../../store/actions/shoppingAction'
import { useDispatch,useSelector } from 'react-redux'
const Allorders = ({order}) => {
    const dispatch = useDispatch()
 
    let currentCart = order.notdone.cart
    let doneOrder = order.done
    const token = useSelector(state => state.userReducer.token)

    const payload={
        _id:order._id,
        cart: currentCart,
        token:token
    }
    const CurrentCart = (
        
        <div>
        {
         currentCart.length >0? currentCart.map(item=>(<Cartdetails key={item.shop._id} item={item} />))
            :''
        }
        {
          currentCart.length >0?  <button className ="btn btn-info"onClick={()=> dispatch(changeToCompleted(payload))}>Done</button>:''
        }  
           </div>
      )
    return (
        <div className="mt-5">
         
         {CurrentCart}

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
