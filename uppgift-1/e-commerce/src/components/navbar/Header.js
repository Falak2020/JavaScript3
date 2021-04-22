import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {

  const counter =  useSelector(state => state.shoppingCart.counter)
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
              <NavLink to="/login" exact className="nav-link  ms-lg-5 active" aria-current="page"><i className="fas fa-user me-2"></i>Log in</NavLink>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header
