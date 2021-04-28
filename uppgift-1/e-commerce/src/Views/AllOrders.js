import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import Allorders from '../components/shoppingCart/Allorders'
const AllOrders = () => {

    const allOrders = useSelector(state => state.shoppingCart.allOrders)
   
    return (
        <div>
            {
              allOrders.length>0? allOrders.map(order=>(<Allorders key={order.index} order={order}/>)) 
              :'' 
            }
        </div>
    )
}

export default AllOrders
