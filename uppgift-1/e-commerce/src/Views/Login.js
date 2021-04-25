import React,{useState} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { login } from '../store/actions/loginAction'
import {useHistory,NavLink} from 'react-router-dom'
import auth from '../services/authService'

const Login = () => {

    const dispatch= useDispatch()
    const [email,setEmail]  = useState('')
    const [password,setPassword] = useState('')
    const history =useHistory()
    const token = useSelector(state=>state.loginReducer.token)
    const error = useSelector(state=>state.loginReducer.error)
    
    
    
    //Functions

   const handelSubmit = (e) => {
        e.preventDefault();

      let user={
          email,
          password
      }
      auth.login((user),()=> {
          if(auth.authenticated)
           history.push('/')
          else
          history.push('/login')
        
        // try{ history.push(history.location.state.from.pathname) }
        // catch{ history.push('/') }

      })
     
    //   dispatch(login(user))
    //     setTimeout(() => {
    //        console.log(error)
    //        error? history.push('/login') :history.push('/') 
    //     }, 2000);
         
    
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
                        <p>Not a member? <NavLink to="/register">Register</NavLink></p> 
                    </div>
                    <small className="text-danger">{auth.error}</small>
                </form>
                
            </div>
        </div>
    )
}

export default Login
