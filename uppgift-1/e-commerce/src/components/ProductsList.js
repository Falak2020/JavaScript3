import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../store/actions/shoppingAction'
import{ useDispatch} from 'react-redux'
const ProductsList = ({product}) => {

  const dispatch = useDispatch()

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

                            <Link exact to ={`details/${product._id}`} className="btn btn-info shadow"> More Details</Link>
                            <i className="fas fa-shopping-cart "  onClick={()=>dispatch(addToCart({shop:product,quantity:1}))}></i> 
                            
                          </div>   
                  </div>
               </div>
                    
                       
          </div>
        
    )
}

export default ProductsList
