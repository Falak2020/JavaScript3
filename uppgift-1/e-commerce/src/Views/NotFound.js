import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
     <div className="mt-5">
       <div className="text-center ">
          <i className="far fa-frown i-size  mt-5"></i>
          <h1 className="text-warning mt-4">404</h1>
          <p className="h2">Sorry, we could not find this page</p>
          <Link exact to ='/' className="btn btn-primary mt-5">Go to Home Page</Link>
       </div>     
    </div>
    )
}

export default NotFound
