import React from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { postCart,deleteDB ,addToCart, removeFromCart,deleteAll } from '../../store/actions/shoppingAction'
const Cartdetails = ({item}) => {

    const dispatch = useDispatch()
    
    const _id = useSelector(state => state.userReducer.userId)
    const token = useSelector(state => state.userReducer.token)
    const shoppingCart = useSelector(state => state.shoppingCart.shoppings)
    
     const payload={
            _id:_id,
            cart: shoppingCart, 
            token:token,
           
        }
    const AddtoCart = () => { 
       
        
         dispatch(addToCart(item.shop))

         if(_id){
            dispatch(postCart(payload))
         }
        
    }

    const Sub=()=>{
       
        dispatch(removeFromCart(item.shop._id))
      
        if(_id){
           
                if(shoppingCart.length===1)
                  deleteDB(payload)
                else
                  dispatch(postCart(payload))
         }
    }
    const Delete=()=>{
        
        dispatch(deleteAll(item.shop._id))
      
        if(_id){
           
                if(shoppingCart.length===1)
                  deleteDB(payload)
                else
                  dispatch(postCart(payload))
         }
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
                        <button className="btn fixed btn-gray text-white" onClick={AddtoCart}>+</button>
                        <button className="btn fixed btn-gray text-white ms-3" onClick={Sub}>-</button>
                        <button className="btn fixed btn-danger ms-3" onClick={Delete}><i className=" fas fa-trash "></i></button>
                    </div>
                   
                </div>
                <hr/>
              
            </div>  
        </div>
            
        
    )
}

export default Cartdetails
