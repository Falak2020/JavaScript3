import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
// import auth from '../../services/authService'
import { logout } from '../../store/actions/userAction'
const Header = () => {

  const counter =  useSelector(state => state.shoppingCart.counter)
  const status =  useSelector(state => state.userReducer.status)
  
  const dispatch = useDispatch()
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark navbar-bg py-3">
       
        <div className="container">
          <NavLink  to="/"className="navbar-brand" >Pokemon.se</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <NavLink to="/" exact className="nav-link active " aria-current="page"> <i className="fas fa-home me-2"></i>Home</NavLink>
              <NavLink to="/shoppingcart" exact  aria-current="page" className="nav-link  ms-lg-5 active "> <i className=" me-2 fas fa-shopping-cart"> </i>
                {counter===0?<span className=" pos-r">Shopping Cart </span>
                             : <span className=" pos-r">Shopping Cart <span  className="pos-a pt-1 ">{counter}</span></span> }            
               </NavLink>
              
               <div to="/login" exact className="nav-link nav-item dropdown nav-link ms-lg-5 active" aria-current="page"  >
                  <a 
                      className="nav-link dropdown-toggle d-inline"
                      id="navbarDropdown"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false">
                    
                        <span class="ms-1"><i className="fas fa-user me-2"></i>User Acount</span> 
                  </a>
                  <ul  className="dropdown-menu p-3 " aria-labelledby="navbarDropdown">
                      <li  className="text-center border  mb-2 dropdown-item" >
                        {
                        status==='log in'?<NavLink exact to='/login' className="text-dark py-2 px-5" >{status}</NavLink>
                        :<div className="text-dark py-2 px-5" onClick={()=> dispatch(logout())} >{status}</div>
                        }
                        </li>
                      <li  className="text-center dropdown-item"><NavLink exact to='/register' className="text-dark  py-2 px-5 " >Sign up</NavLink></li>

                      <li><hr className="dropdown-divider" /></li>
                      <li  className="text-center dropdown-item"><NavLink exact to='/myorders' className="text-dark  py-2 px-5 " >My orders</NavLink></li>
                  </ul>   
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header
