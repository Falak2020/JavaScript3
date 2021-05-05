import React,{ useRef, useState,useEffect } from 'react'
import Select from 'react-select'
import {useHistory} from 'react-router-dom'
import {signUp} from '../store/actions/userAction'
import { useDispatch,useSelector } from 'react-redux'

const Register = () => {

const dispatch = useDispatch()
const error = useSelector(state=>state.userReducer.regError) //server error the user is already exists
const token = useSelector(state=>state.userReducer.token)
const history= useHistory()

 const firstName = useRef()
 const lastName = useRef()
 const email = useRef()
 const password = useRef()
 
 const[usererr,setUsererr] = useState(false) // if the user didnot fill all the fields
 const [role,setRole]=useState('')
 


 const options = [
  { value: '', label: 'Select Role' },
  { value: 'user', label: 'user' },
  { value: 'admin', label: 'admin' },
]

const SelectComponent = () => (
  <select className="w-25 p-2 " value={role}  onChange={(e)=>setRole(e.value)}>
   {
     options.map((option) => (
           <option value={option.value}>{option.label}</option>
      ))
    } 
  </select>
  // <Select options={options} value={role}  onChange={(e)=>setRole(e.value)} placeholder={role}/>
)

 

 const RegisterUser=(e)=>
 {
   e.preventDefault()

   if(firstName.current.value !=='' && lastName.current.value !== '' && email.current.value !== '' && password.current.value !== '')
   {
    
    let _user={
      firstName:firstName.current.value,
      lastName:lastName.current.value,
      email:email.current.value,
      password:password.current.value,
      role
    }
   
     dispatch(signUp(_user))
 
     firstName.current.value=''
     lastName.current.value=''
     email.current.value=''
     password.current.value=''
 
     firstName.current.focus()
    
  
   }
   else{
     setUsererr(true)
   }
 }

 useEffect(() => {
  if(token){
    console.log(token)
      history.push('/')
  }
  
}, [token])

    return (
      <div>
      
      
        <form className="container mt-3 bg-light p-5" onSubmit={RegisterUser}  >
            <p className="h2">Are you a new customer?</p>
            <p className="h4 my-4">Register you now </p>
            <input type="text" className="form-control mb-3 border"  placeholder="First Name"  ref={firstName} />
            <input type="text"  className="form-control border mb-3" placeholder="Last Name" ref={lastName} />
            <input type="email" className="form-control border mb-3"  placeholder="Email" ref={email} />
            <input type="password" className="form-control border"  placeholder="Password" ref={password}  /> 
           
            <div className="mt-3 ">  
              {SelectComponent()}
            </div> 
            <button  type="submit" className="btn btn-gray  mt-5 text-white text-uppercase">register</button>
            <div className="mt-3">
              {error?<small className="text-danger">The user is already exists</small>:''} 

              {usererr?<small className="text-danger">Please fill in all the fields</small>:''}
            </div>       
       </form>
   
    </div>
    )
}

export default Register
