import React,{useState} from 'react'
import OrderDetails from './OrderDetails'
import { useDispatch,useSelector } from 'react-redux'
import { changeToCompleted } from '../../store/actions/shoppingAction'
import { Link } from 'react-router-dom'

const Paidorders = ({order,_id,doneOrder,paidOrders}) => {
  
    const dispatch = useDispatch()
   
    const token = useSelector(state => state.userReducer.token)
    const role = useSelector(state => state.userReducer.role)
   

    const[res,setRes] = useState(false)
     const ToCompleted=()=>{
      
      let Obj={
     
        ...order,completed:true
      }
      
      
      paidOrders = paidOrders.filter(item => item.orderNumber !== Obj.orderNumber) //Delete the completed order from paidorders
      
        let payload={
          _id,
          cart:[...doneOrder,Obj],
          paidOrders,
          token:token,
          orderNumber:Obj.orderNumber,
         
      }
  
      dispatch(changeToCompleted(payload))
       setRes(true)
      
      }
      
       
     
      
    return (
        <div  >
          <div className="card mt-5 p-3">
           {
             role==='admin'
             ?
             <div className="text-end">
              <button   className ="btn btn-info "onClick={ToCompleted} disabled={res}>Complete order</button> 
              { res? <h5 className="text-success mt-3">The order is completed now <Link to="/allcarts">Return to All orders</Link></h5>:''} 
             </div>
            
            :
            ''
           }
            
            
            <p className="text-primary h5"> Order Number: <span className="text-dark">{order.orderNumber}</span></p> 
        

            {
             order.paid? <p className="text-success h5"><i className="fas fa-check me-2"></i>paid</p>:''
            
            }
            {
             order.completed?<h4 className="text-success">completed</h4>:''   
            }
            
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center flex-wrap">
             {
                
                order.cart.map(item =>(<OrderDetails key={item.shop._id} item={item} />))
             
            }      
            </div>
            
        </div>
        
    
    </div>
    )
}

export default Paidorders