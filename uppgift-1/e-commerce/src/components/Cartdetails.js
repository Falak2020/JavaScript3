import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart,deleteAll } from '../store/actions/shoppingAction'

const Cartdetails = ({item}) => {

    const dispatch = useDispatch()
    
  
    const AddtoCart = () => { 
       
        dispatch(addToCart(item.shop))
       
        
    }
    return (
       
        <div>
            <div className="card px-5 py-3">
                <div className="d-flex align-items-center justify-content-between flex-column flex-md-row ">
                    <div className="d-flex align-items-center g-0 ">
                        <div className=" ">
                            <img src={item.shop.image} alt="..." className="img-fluid img-width"/>
                        </div>
                        <div className="ms-3">
                            <div className=" mt-3">
                                <h4  >{item.shop.name}</h4>
                                <small>Price:{item.quantity}st X {item.shop.price} </small> 
                                
                            </div>
                        </div>  
                    </div> 
                    <div className="d-flex align-items-center">
                        <button className="btn btn-gray text-white" onClick={AddtoCart}>+</button>
                        <button className="btn btn-gray text-white ms-3" onClick={()=>dispatch(removeFromCart(item.shop._id))}>-</button>
                        <h4 className="m-0" onClick={()=>dispatch(deleteAll(item.shop._id))}><i className="text-danger fas fa-trash ms-3"></i></h4>
                    </div>
                   
                </div>
                <hr/>
            </div>  
            
        </div>
            
        
    )
}

export default Cartdetails
