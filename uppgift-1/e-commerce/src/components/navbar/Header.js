import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
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
              <NavLink to="/" exact className="nav-link active " aria-current="page">Home</NavLink>
              <NavLink to="/shoppingcart" exact className="nav-link  ms-2 active" aria-current="page">Shopping Cart</NavLink>
              <NavLink to="/login" exact className="nav-link  ms-2 active" aria-current="page">Log in</NavLink>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header
