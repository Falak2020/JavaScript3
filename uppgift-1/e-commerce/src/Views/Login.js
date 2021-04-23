import React,{useState} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { login } from '../store/actions/loginAction'
import {useHistory} from 'react-router-dom'

const Login = () => {

    const dispatch= useDispatch()
    const [email,setEmail]  = useState('')
    const [password,setPassword] = useState('')
    const history =useHistory()
    const token = useSelector(state=>state.loginReducer.token)
    const loading = useSelector(state=>state.loginReducer.loading)
    
    
    
    //Functions

   const handelSubmit = (e) => {
        e.preventDefault();

      let user={
          email,
          password
      }

     dispatch(login(user))  
     history.push('/')
     
    }

    return (
        <div className="d-flex align-items-center justify-content-center"> 
           <div className="border p-5 bg-white mt-5">
                <h5 className="mb-3">Welcome to our e-commerce website, please enter your user information</h5>
                <form className=" p-3" onSubmit = {handelSubmit} >
                    <input type="email" placeholder="Enter your email" className="form-control border mb-4" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password"  className="form-control border" placeholder="Enter your password" value ={password}  onChange={(e)=>setPassword(e.target.value)}/>
                    <button  type="submit" className="btn btn-info form-control mt-5 text-white text-uppercase mb-3">Log in</button>    
                    <div className="text-center mt-2">
                        {/* <p>Not a member? <router-link to="/register">Register</router-link></p> */}
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Login
