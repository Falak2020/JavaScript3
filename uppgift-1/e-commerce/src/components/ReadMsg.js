import React from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'


const ReadMsg = () => {
  
     const notice = useSelector(state => state.userReducer.message)
     const userMsg = useSelector(state => state.userReducer.userMsg)
     
    
   
    return (
        <div className="p-5 readMsg-bg shadow">
              {
               userMsg.length>0?
               userMsg.map(order=> 
                <ul className="list-group">
                  <li className="list-group-item mb-3">
                    <p >Your order which has the number 
                       <span className="text-primary">{[order]}</span> is completed now
                    </p>   
                  </li>  
                </ul>
               
                )

                 
               :'' 
                }
             <p className=" mt-5">Would you like to view your completed orders click:
             <Link to ="/myorders" className="ms-3" >My orders</Link></p>
        </div>
    )
}

export default ReadMsg
