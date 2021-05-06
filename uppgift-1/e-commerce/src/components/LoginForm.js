import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { login } from '../store/actions/userAction'
import { NavLink } from 'react-router-dom'
import auth from '../services/authService'
import { useHistory } from 'react-router-dom'
const LoginForm = () => {
    
    const dispatch= useDispatch()
    const error = useSelector(state=>state.userReducer.logError)
    const token = useSelector(state=>state.userReducer.token)
    const role = useSelector(state=>state.userReducer.role)



    const [email,setEmail]  = useState('')
    const [password,setPassword] = useState('')
    
    const history=useHistory()
   
    
    const handelSubmit = (e) => {
       
       e.preventDefault();
        let user={
            email,
            password
        }

       if(user.email !== '' && user.password !== '')
        {
          dispatch(login(user)) 
          auth.authenticated=true  
          auth.role=role
          setEmail('')
          setPassword('')
          
        }  
      }
      useEffect(() => {
        if(token){
          
            history.push('/')
            auth.role=role
            
        }
        
    }, [token])
    return (
        <form className=" p-3" onSubmit = {handelSubmit} >
                <input type="email" placeholder="Enter your email" className="form-control border mb-4" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password"  className="form-control border" placeholder="Enter your password" value ={password}  onChange={(e)=>setPassword(e.target.value)}/>
                <button  type="submit" className="btn btn-gray form-control mt-5 text-white text-uppercase mb-3">Log in</button>    
                <div className="text-center mt-2">
                    <p>Not a member? <NavLink to="/register">Register</NavLink></p> 
                </div>
            {
               
                   error ?<small className="text-danger">Incorrect Email or password</small>:''  
                   
            } 
            
    </form>
    )
}

export default LoginForm
