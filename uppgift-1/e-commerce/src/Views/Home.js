import React,{useEffect,useRef} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import ProductsList from '../components/ProductsList'
import { getProducts,searchValue } from '../store/actions/productsAction'

const Home = () => {

   const dispatch = useDispatch()
   const products = useSelector(state => state.productsReducer.products)
   const filteredProducts = useSelector(state => state.productsReducer.filteredProducts)

   const loading = useSelector(state => state.productsReducer.loading)
   const search = useRef()

  const handleClick=()=>{

   dispatch(searchValue(search.current.value))
  }
  
  const Loading =(
   
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
   
  )

   useEffect(() => {
     setTimeout(() => {
       dispatch(getProducts())
     },2000);
      
       
   }, [dispatch])
    return (
      <div>
        <div className="input-group mb-5">
          <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" ref={search} onKeyUp={handleClick}/>
          <button type="button" className="btn btn-warning text-white" >search</button>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">      
          {
            loading?<div className="d-flex ms-auto">{Loading}</div>
            :
            
                  filteredProducts && filteredProducts.map(product=>(<ProductsList  key = {product._id} product = {product} />)) 
          }
        </div>
       
     </div>
    )
}

export default Home
