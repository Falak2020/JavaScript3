import React,{ useEffect }  from 'react'
import { useSelector,useDispatch } from 'react-redux'
import AllordersList from '../../components/shoppingCart/AllordersList'
import { useHistory } from 'react-router-dom'
import { getAllCart } from '../../store/actions/shoppingAction'
const AllOrders = () => {
    
    const allOrders = useSelector(state => state.shoppingCart.allOrders)
    const {role,token} = useSelector(state => state.userReducer)
    const history=useHistory()
    const dispatch = useDispatch()

    useEffect(() => {    
    dispatch(getAllCart(token))
    if(role==='user')
         history.push('/login')
    }, [role,token,allOrders])
    return (
       
        <div>
            {
              allOrders.length>0? allOrders.map(order=>(<AllordersList key={order._id} order={order}/>)) 
              :'' 
            }
        </div>
    )
}

export default AllOrders
