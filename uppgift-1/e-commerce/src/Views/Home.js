import React,{useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import ProductsList from '../components/ProductsList'
import { getProducts } from '../store/actions/productsAction'
const Home = () => {

   const dispatch = useDispatch()
   const products = useSelector(state => state.productsReducer.products)
   const loading = useSelector(state => state.productsReducer.loading)

   useEffect(() => {
      dispatch(getProducts())
       
   }, [dispatch])
    return (
       
            <div className="row row-cols-1 row-cols-md-2 g-4">      
              {
                loading?<h1>...Loading</h1>
                :
                
                     products && products.map(product=>(<ProductsList  key = {product._id} product = {product} />)) 
              }
            </div>
       
       
    )
}

export default Home
