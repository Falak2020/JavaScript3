import React,{useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { getProducts } from '../../store/actions/productsAction'

import AllproductsDetails from '../../components/AllproductsDetails'
const AllProducts = () => {

   const dispatch = useDispatch()
   const products = useSelector(state => state.productsReducer.products)
  
   

   useEffect(() => {
    dispatch(getProducts())
     
    }, [dispatch])
    return (
        <div >      
          {
           products && products.map(product=>( 
               <AllproductsDetails  key={product._id} product={product}/>
              
            
           ))
            
          }
        </div>
    )
}

export default AllProducts

