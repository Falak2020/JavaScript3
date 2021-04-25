import React,{ useRef, useState} from 'react'
import Select from 'react-select'
const Register = (props) => {

 const firstName = useRef()
 const lastName = useRef()
 const email = useRef()
 const password = useRef()

 const [role,setRole]=useState('')


 const options = [
  { value: 'user', label: 'user' },
  { value: 'admin', label: 'admin' },
]

const MyComponent = () => (
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
   console.log(_user)
 }

    return (
        <form className="container mt-3 " onSubmit={RegisterUser}  >
        <p className="h2">Are you a new customer?</p>
        <p className="h4 mb-4">Register you now </p>
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
          {MyComponent()}
        </div> 
         <button  type="submit" className="btn btn-info form-control mt-5 text-white text-uppercase">register</button>
     </form>
    )
}

export default Register
