import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../store/actions/shoppingAction'
import{ useDispatch,useSelector} from 'react-redux'
import { postCart } from '../store/actions/shoppingAction'
const ProductsList = ({product}) => {
  
  const _id = useSelector(state => state.userReducer.userId)
  const token = useSelector(state => state.userReducer.token)
  const shoppingCart = useSelector(state => state.shoppingCart.shoppings)
  const dispatch = useDispatch()


  const AddtoCart=()=>{
    let payload={
       _id:_id,
       cart: shoppingCart,
       token:token
   }
   
    dispatch(addToCart(product))
    if(_id){
       dispatch(postCart(payload))
    }
  }
    return (
             <div className="col col-lg-4 col-md-6 ">
               <div  className="card  h-100 hover-shadow h-100  p-3">
                  <img src={product.image} className="img-height card-img-top img-fluid " alt=""/>
                  <div className="card-body text-dark ">
                          <h4 className="card-title text-decoration-underline ">{product.name}</h4>
                          <p className="text-danger ">
                            {product.price} kr
                          </p>
                          <p className="card-text">
                            {product.short}
                          </p> 
                          <div className="text-end h2 text-darkslateblue d-flex justify-content-between">

                            <Link to ={`details/${product._id}`} className="btn btn-info shadow"> More Details</Link>
                            <i className="fas fa-shopping-cart "  onClick={AddtoCart}></i> 
                            
                          </div>   
                  </div>
               </div>
                    
                       
          </div>
        
    )
}

export default ProductsList
