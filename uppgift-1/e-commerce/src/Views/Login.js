import React from 'react'
import {useSelector} from 'react-redux'

import LoginForm from '../components/LoginForm'
import Home from './Home'
const Login = () => {
  
    
     const token = useSelector(state=>state.userReducer.token)
     
    return (
        <div>
         <div className="d-flex align-items-center justify-content-center"> 
          {
            token?<Home />
             :
              <div className="border p-5 bg-white mt-5">
                 <h5 className="mb-3">Welcome to our e-commerce website, please enter your user information</h5>
                 <LoginForm  />
             </div>      
          }
          
         </div>
        </div>
    )
}

export default Login
