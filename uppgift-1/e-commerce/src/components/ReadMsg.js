import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ReadMsg = () => {
  
     const notice = useSelector(state => state.userReducer.message)
    
    return (
        <div className="p-3 text-center">
            <p >Your order which has the number <mark className="text-primary">{notice}</mark> is completed</p>
            <p>Would you like to view your completedOrder</p>
             <Link to ="/myorders" >My orders</Link>
        </div>
    )
}

export default ReadMsg
