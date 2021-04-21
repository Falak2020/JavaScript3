import React from 'react'
import { Link } from 'react-router-dom'
const ProductsList = ({product}) => {
    return (
             <div className="col col-lg-4 col-md-6 ">
               
                 <Link to ={`/${product._id}`} className="card  h-100 hover-shadow h-100  p-3">
                    <img src={product.image} className="img-height card-img-top img-fluid "/>
                    <div className="card-body text-dark ">
                            <h4 className="card-title text-decoration-underline ">{product.name}</h4>
                            <p className="text-danger ">
                              {product.price} kr
                            </p>
                            <p className="card-text">
                              {product.short}
                            </p>     
                    </div>
               </Link>         
          </div>
        
    )
}

export default ProductsList
