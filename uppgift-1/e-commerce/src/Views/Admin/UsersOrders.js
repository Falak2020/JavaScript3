import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Cartdetails from '../../components/shoppingCart/Cartdetails'
import Order from '../../components/shoppingCart/Order'
import {getUserCart} from '../../store/actions/shoppingAction'
import Paidorders from '../../components/shoppingCart/Paidorders'

const UsersOrders = (props) => {
   
    let order = props.location.state.usersOrder.order
   
    const shoppingCart = order.notdone.cart
    const orders=order.done
    const paidOrders = order.paid
    const _id =order._id
    const totalPrice = useSelector(state => state.shoppingCart.totalPrice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserCart(_id))
    }, [dispatch])
    
    return (
        <div>
            <div className="text-center mt-5 "><h2 className="py-4 navbar-bg shadow mb-5">Current Orders</h2>
            
                { shoppingCart.length>0?shoppingCart.map(item => (<Cartdetails key={item.shop._id} item={item} />))
                : <h3>Your shopping cart is empty</h3> 
                
                }
            
               <div className=" d-flex justify-content-around align-items-center p-4">
                    <div>
                        {
                        (totalPrice>0) &&<strong className=" p-3 text-center">Total Price={totalPrice}</strong>
                        }   
                    </div>
                    
                </div>
            </div>
            <div className="text-center mt-5 py-5"><h2 className="navbar-bg shadow py-4">Paid Orders</h2>
            {
            paidOrders.length>0? 
           
              paidOrders.map(order=>(<Paidorders key={order.orderNumber} order={order} doneOrder={orders} _id={_id}/>))
              
            
            : <h3 className="text-center p-5 ">Your have not any paid orders</h3>   
          }
            </div>
            

           <div className="navbar-bg shadow p-4 text-center mt-5 "><h2>Completed Orders</h2></div>
            {      
               orders.length>0?
               
               orders.map(order => (<Order key ={order.orderNumber} order={order} />))
               :''
            }
        </div>
    )
 }

export default UsersOrders
