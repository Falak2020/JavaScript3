import React,{ useContext } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import auth from '../../services/authService'
import { userContext } from '../../contexts/userContext'
import { logout } from '../../store/actions/userAction'
import { distroyShoppingCart } from '../../store/actions/shoppingAction'
import { readMsg } from '../../store/actions/userAction'
import ReadMsg from '../ReadMsg'
import bild from '../../assets/picatshu1.png'
const Header = () => {

  const counter =  useSelector(state => state.shoppingCart.counter)
  const status =  useSelector(state => state.userReducer.status)
  const role = useSelector(state => state.userReducer.role)
  const notice = useSelector(state => state.userReducer.message)
  const _id = useSelector(state => state.userReducer.userId)
  
  const dispatch = useDispatch()
  
  const {active,inActive} =useContext(userContext)
  const userStatus= status==='log in'?inActive:active


  const logOut=()=>{
     dispatch(logout())
     dispatch(distroyShoppingCart())
     auth.authenticated=false
     auth.role='user'
  }


 const readMessage=()=>{

  dispatch(readMsg(_id))
 }
 //////////////////////////////////////
 const ShoppingCart = (
   <div>
     {
      role==='admin'? 
      <NavLink  to="/allcarts"  aria-current="page" className="nav-link  ms-lg-5  "><i className=" me-2 fas fa-shopping-cart"></i>All Orders</NavLink>
        :
      <NavLink to="/shoppingcart"  aria-current="page" className="nav-link  ms-lg-5  "> <i className=" me-2 fas fa-shopping-cart"> </i>
        {counter===0?<span className=" pos-r">Shopping Cart </span>
                    : <span className=" pos-r">Shopping Cart <span  className="pos-a pt-1 ">{counter}</span></span> }            
      </NavLink>
     }
   </div>
  
 )
//////////////////////////////////////
 const UserAccount = (
  <div   className="nav-link nav-item  dropdown nav-link ms-lg-5 active" aria-current="page"  >
  <span 
      
      className="nav-link   dropdown-toggle d-inline"
      id="navbarDropdown"
      role="button"
      data-mdb-toggle="dropdown"
      aria-expanded="false"
      >
    
        <span className="ms-1"><i className={userStatus.name} style={{color:userStatus.color}}></i> User Acount</span> 
  </span>
  <ul  className="dropdown-menu p-3 " aria-labelledby="navbarDropdown">
      <li  className="text-center border  mb-2 dropdown-item" >
        {
        status==='log in'?<Link  to='/login' className="text-dark py-2 px-5" >{status}</Link>
        :<div className="text-dark py-2 px-5" onClick={logOut} >{status}</div>
        }
        </li>
      <li  className="text-center dropdown-item"><Link   to='/register' className="text-dark  py-2 px-5 " >Sign up</Link></li>
      <li><hr className="dropdown-divider" /></li>
      {
        role==='admin'?''
        :
       
        <li  className="text-center dropdown-item">
          <Link  to='/myorders' className="text-dark  py-2 px-5 " >My orders</Link>
        </li>
      }
         
  </ul>   
</div>
 )
 ///////////////////////////////////
 const Notices = (
  <div   className="nav-link nav-item dropdown nav-link  active" aria-current="page" >
  <span 
      
      className="nav-link dropdown-toggle d-inline hidden-arrow"
      id="navbarDropdown"
      role="button"
      data-mdb-toggle="dropdown"
      aria-expanded="false"
     >
    
        <span > 
        {
          notice? <i className="fas fa-bell"  ><span  className="pos-bell pt-1"  >1</span></i>
           :''
        } 
        
        </span> 
  </span>
  <ul  className="dropdown-menu message dropdown-menu-end" aria-labelledby="navbarDropdown"  onClick={readMessage} >
     <ReadMsg />   
  </ul>   
</div>
 )

 /////////////////////////////////
 const addProduct=(
   <div>
     {
      role==='admin'? 
      <NavLink  to="/addProduct"  aria-current="page" className="nav-link    "><i className=" me-2 fas fa-plus-circle"></i>Add Product</NavLink>
        :
      ''
     }
   </div>
 )
 
 ///////////////////////////////////////////
 const AllProducts=(
  <div>
  {
   role==='admin'? 
   <NavLink  to="/allProducts"  aria-current="page" className="nav-link  ms-2  ">All Product</NavLink>
     :
   ''
  }
</div>
 )
 /////////////////////////////////////////////////////
 return (
      
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg ">
       
        <div className="container">
         
          <div className="navbar-brand" > <img src={bild} alt=""  className="img-style me-2"/> Pokemon.se</div>
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
              {
                role==='admin'?''
                :
                <NavLink exact to="/" className="nav-link active " aria-current="page"> 
                  <i className="fas fa-home me-2"></i>Home
                </NavLink>
              }
              
              {/* shopping cart // all orders */}
                 {ShoppingCart}
              {/* User account */}

                 {UserAccount}
              
              {/* Notices which come from admin */}
                 {Notices}

              {/* Add new Product */}
              {addProduct}

              {/* Show all products */}
              {AllProducts}
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header

