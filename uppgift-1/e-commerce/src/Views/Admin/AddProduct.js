import React ,{ useRef } from 'react'
import {addProduct } from '../../store/actions/productAction'
import { useDispatch,useSelector } from 'react-redux'

const AddProduct = () => {
//Product
    const productName=useRef()
    const productShortDesc=useRef()
    const productDesc=useRef()
    const productPrice=useRef()
    const productImg=useRef()
  /////////////
    const dispatch = useDispatch()
    const token = useSelector(state=>state.userReducer.token)
    const result = useSelector(state=>state.productReducer.result)
     
    
  
  // my Functions
    const AddNewProduct=(e)=>{
     e.preventDefault()

     let Product={
         name:productName.current.value,
         short:productShortDesc.current.value,
         desc:productDesc.current.value,
         price:productPrice.current.value,
         image:productImg.current.value
     }
     let payload={
         Product,
         token
     }
     dispatch(addProduct(payload))
     productName.current.value=''
     productShortDesc.current.value=''
     productDesc.current.value=''
     productPrice.current.value=''
     productImg.current.value=''
    }

    return (
      
      <form  className="container mt-5 bg-light p-5 " onSubmit={AddNewProduct}>
           <p className="h4 p-3 shadow bg-info bg-warning text-center mb-5">Enter a new product</p>
           <input type="text"  className="mt-3 form-control" placeholder="Enter products name" ref={productName}/>
           <input type="text"  className="mt-3 form-control" placeholder="Enter short description about product" ref={productShortDesc}/>
           <input type="text"  className="mt-3 form-control" placeholder="Enter your description about product" ref={productDesc} />
           <input type="text"  className="mt-3 form-control" placeholder="Enter the price of product" ref={ productPrice}/>
           <input type="text"  className="mt-3 form-control" placeholder="Enter the image of the product" ref={ productImg }/>
           
           <button type="submit" className="btn btn-info form-control mt-5  text-uppercase" id="btn-send" >Add product</button>
          
           {
               result?
               <div className="mt-5">
                    <small className="text-success mt-5 ">Product added successfully</small>
               </div>
              
               :
               ''
           }

      </form>
 
    )
}

export default AddProduct

