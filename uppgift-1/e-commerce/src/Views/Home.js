import React,{useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import ProductsList from '../components/ProductsList'
import { getPosts } from '../store/actions/postsAction'
const Home = () => {

   const dispatch = useDispatch()
   const products = useSelector(state => state.postsReducer.posts)
   const loading = useSelector(state => state.postsReducer.loading)

   useEffect(() => {
      dispatch(getPosts())
       
   }, [])
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
