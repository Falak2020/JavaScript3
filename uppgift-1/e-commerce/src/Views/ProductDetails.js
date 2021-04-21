import React,{useEffect} from 'react'
import{ useDispatch,useSelector} from 'react-redux'
import { getPost } from '../store/actions/postAction'
import { addToCart } from '../store/actions/shoppingAction'
const ProductDetails = (props) => {
    let id = props.match.url 
    
    const dispatch = useDispatch()
    const product = useSelector(state => state.postReducer.post)
    const shoppings = useSelector(state => state.shoppingCart.shoppings)
    const counter = useSelector(state => state.shoppingCart.counter)
    const loading = useSelector(state => state.postReducer.loading)
     
    useEffect(() => {
        dispatch(getPost(id))
    }, [])

    //Functions
    const AddtoCart =()=>{
        let cart ={
           shop:product,
           quantity:1 
        }
        dispatch(addToCart(cart))
    }
    return (
       
        <div className="d-flex align-items-center p-5">
            {
                !product && loading?<h1>Loading ...</h1>:
                <div className="card mt-5 p-5 " >
                   <div className="row g-0">
                       <div className="col-md-4">
                          <img src={product.image}  className="img-fluid"/>
                       </div>
                       <div className="col-md-8">
                          <div className="card-body mt-5">
                             <h5 className="card-title">{product.name}</h5>
                             <p className="card-text">
                               price: {product.price} kr
                             </p>
                             <p className="card-text">
                                {product.short}
                             </p>
                             <p className="card-text">
                                {product.desc}
                            </p>
                            <p className="card-text">
                               <small className="text-muted">{product.modified}</small>
                            </p>
                            <button className="btn btn-primary" onClick={ AddtoCart}><i className="fas fa-shopping-cart me-1"></i>add to cart</button>
                         </div>
                    </div>
                  </div>
                </div>
            }
        </div>
    )
}

export default ProductDetails
