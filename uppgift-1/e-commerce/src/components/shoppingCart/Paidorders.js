import React from 'react'
import OrderDetails from './OrderDetails'
import { useDispatch,useSelector } from 'react-redux'
import { changeToCompleted } from '../../store/actions/shoppingAction'

const Paidorders = ({order,_id,doneOrder,paidOrders}) => {
  
    const dispatch = useDispatch()
    const token = useSelector(state => state.userReducer.token)
    const role = useSelector(state => state.userReducer.role)
   
    
     const ToCompleted=()=>{

      let Obj={
     
        ...order,completed:true
      }

      paidOrders = paidOrders.filter(item => item.orderNumber !== Obj.orderNumber)
      
        let payload={
          _id,
          cart:[...doneOrder,Obj],
          paidOrders,
          token:token,
          orderNumber:Obj.orderNumber
      }
  
      dispatch(changeToCompleted(payload))
      }

    return (
        <div  >
          <div className="card mt-5 p-3">
           {
             role==='admin'
             ?
             <div className="text-end">
              <button  className ="btn btn-info "onClick={ToCompleted}>Complete order</button>  
            </div>
            :
            ''
           }
            
            
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

export default Paidorders