import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { deleteP } from '../store/actions/productAction'
const AllproductsDetails = ({product}) => {
    
    const dispatch = useDispatch()
    const token = useSelector(state => state.userReducer.token)
    const deleteProduct=(e)=>{
        let payload={
            _id:e.target.id,
            token
        }
    
        dispatch(deleteP(payload))
       }
    return (
         <div className="d-flex justify-content-between align-items-center border p-3 mb-3 shadow">
                <p className="mb-0">{product.name}</p>
                <button className="btn btn-danger" id={product._id} onClick={(e) => { deleteProduct(e)}}>delete</button>
         </div>  
    )
}

export default AllproductsDetails
