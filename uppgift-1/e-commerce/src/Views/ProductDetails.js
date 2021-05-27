import React,{useEffect} from 'react'
import{ useDispatch,useSelector} from 'react-redux'
import { getProduct } from '../store/actions/productAction'
import { addToCart } from '../store/actions/shoppingAction'
import { postCart } from '../store/actions/shoppingAction'
import {Link } from 'react-router-dom'


const ProductDetails = (props) => {

    const id = props.match.params.id
    
    const dispatch = useDispatch()
    const product = useSelector(state => state.productReducer.product)
    // const shoppings = useSelector(state => state.shoppingCart.shoppings)
    // const counter = useSelector(state => state.shoppingCart.counter)
    const loading = useSelector(state => state.productReducer.loading)
    const _id = useSelector(state => state.userReducer.userId)
    const token = useSelector(state => state.userReducer.token)
    const userName = useSelector(state => state.userReducer.userName)
    const shoppingCart = useSelector(state => state.shoppingCart.shoppings)

    useEffect(() => {
       
         dispatch(getProduct(id))  
      
       
    }, [dispatch])

    //Functions
    const AddtoCart=()=>{
      
      let payload={
         _id,
         cart:shoppingCart,
         token,
         userName
     }
    
      dispatch(addToCart(product))
      if(_id){
         dispatch(postCart(payload))
      }
      
      
    }

    const Loading =(
      <div className="wrapper">
         <div className="spinner"></div>
      </div>
    )
    return (
       
        <div className="d-flex align-items-center p-5">
            {
             loading?<div >{Loading}</div>:product&&
                <div className="card mt-5 p-5 " >
                   <div className="row g-0">
                       <div className="col-lg-4 ">
                          <img src={product.image} alt=""  className="img-fluid"/>
                       </div>
                       <div className="col-lg-8 ">
                          <div className="card-body mt-5">
                             <h3 className="card-title ">{product.name}</h3>
                             <p className="card-text text-danger my-4">
                               Price : {product.price} SEK
                             </p>
                             <h4 className="text-primary">Discription : </h4>
                             <p className="card-text">
                                {product.desc}
                            </p>
                            <p className="card-text">
                               <small className="text-muted">{product.modified}</small>
                            </p>
                            <button className="btn btn-warning me-5 mb-3 mb-md-0 " ><Link to="/" className="text-light">Back To Products</Link></button>

                            <button className="btn btn-primary" onClick = {AddtoCart}><i className="fas fa-shopping-cart me-1"></i>add to cart</button>
                            
                         </div>
                    </div>
                  </div>
                </div>
            }
        </div>
    )
}

export default ProductDetails
