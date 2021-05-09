import React from 'react'
import {Link} from 'react-router-dom'
const Appfooter = () => {
    return (
      
             <footer className="text-center text-dark navbar-bg" >
                <div className="container p-4 pb-0">
                <section>
                    <p className="d-flex justify-content-center align-items-center">
                    <span className="me-3">Register for free</span>
                    
                    <i className="fas fa-hand-point-right me-2"></i> 
                     <Link to="/register" >Sign up! </Link>
                    </p> 
                </section>
                </div>
                <div className="text-center p-3" >
                © 2021 Copyright:
                <a className="text-dark" href="/#"> Pokemon.se</a>
                </div>
            </footer>
       
        
    )
}

export default Appfooter
