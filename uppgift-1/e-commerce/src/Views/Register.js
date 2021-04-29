import React,{ useRef, useState} from 'react'
import Select from 'react-select'
import {useHistory} from 'react-router-dom'
import {signUp} from '../store/actions/userAction'
import { useDispatch,useSelector } from 'react-redux'

const Register = () => {

const dispatch = useDispatch()
const error = useSelector(state=>state.userReducer.regError)
const history= useHistory()

 const firstName = useRef()
 const lastName = useRef()
 const email = useRef()
 const password = useRef()

 const [role,setRole]=useState('')


 const options = [
  { value: 'user', label: 'user' },
  { value: 'admin', label: 'admin' },
]

const SelectComponent = () => (
  <Select options={options} value={role} onChange={(e)=>setRole(e.value)} placeholder={role}/>
)

 

 const RegisterUser=(e)=>
 {
   e.preventDefault()
   let _user={
     firstName:firstName.current.value,
     lastName:lastName.current.value,
     email:email.current.value,
     password:password.current.value,
     role
   }
  //  auth.register(_user,()=>{
  //    console.log(auth.error)
  //    if(!auth.error){
  //       history.push('/')
  
  //    }

  //    else
  //      history.push('/register')
  //  }) 
  

    dispatch(signUp(_user))
    
    console.log(error)
    error?  history.push('/register'):  history.push('/')
 
 
 }

    return (
        <form className="container mt-3 " onSubmit={RegisterUser}  >
            <p className="h2">Are you a new customer?</p>
            <p className="h4 my-4">Register you now </p>
            <input type="text" className="form-control mb-3 border"  placeholder="First Name"  ref={firstName} />
            <input type="text"  className="form-control border mb-3" placeholder="Last Name" ref={lastName} />
            <input type="email" className="form-control border mb-3"  placeholder="Email" ref={email} />
            <input type="password" className="form-control border"  placeholder="Password" ref={password}  /> 
            {/* <div className="mt-3"  ref={role} >
              <select className="form-control" > 
                <option  >Select Role</option>
                <option ref={user} >user</option>
                <option ref={password} >admin</option>
              </select>
            </div> */}
            <div className="mt-3">  
              {SelectComponent()}
            </div> 
            <button  type="submit" className="btn btn-info form-control mt-5 text-white text-uppercase">register</button>
            <div className="mt-3">
              {error?<small className="text-danger">The user is already exists</small>:''} 
            </div>
            
     </form>
    )
}

export default Register
