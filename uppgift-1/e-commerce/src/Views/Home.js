import React,{useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../store/actions/postsAction'
const Home = () => {

   const dispatch = useDispatch()
   const products = useSelector(state => state.postsReducer)
   useEffect(() => {
      dispatch(getPosts())
       
   }, [])
    return (
        <div>
           Home 
        </div>
    )
}

export default Home
