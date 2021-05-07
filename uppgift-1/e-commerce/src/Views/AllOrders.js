import React,{ useEffect }  from 'react'
import { useSelector } from 'react-redux'
import AllordersDetail from '../components/shoppingCart/AllordersDetail'
import { useHistory } from 'react-router-dom'
const AllOrders = () => {
    
    const allOrders = useSelector(state => state.shoppingCart.allOrders)
    const {role,token} = useSelector(state => state.userReducer)
    const history=useHistory()
    
    useEffect(() => {    

   if(role==='user')
         history.push('/login')
    }, [role,token])
    return (
       
        <div>
            {
              allOrders.length>0? allOrders.map(order=>(<AllordersDetail key={order._id} order={order}/>)) 
              :'' 
            }
        </div>
    )
}

export default AllOrders
