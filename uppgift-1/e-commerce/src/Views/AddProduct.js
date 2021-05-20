import React from 'react'

const AddProduct = () => {
    return (
      
      <form  class="container mt-5 bg-light p-5 ">
           <p className="h4 p-3 shadow bg-info bg-warning text-center mb-5">Enter a new product</p>
           <input type="text"  className="mt-3 form-control" placeholder="Enter products name"/>
           <input type="text"  className="mt-3 form-control" placeholder="Enter short description about product"/>
           <input type="text"  className="mt-3 form-control" placeholder="Enter your description about product" />
           <input type="text"  className="mt-3 form-control" placeholder="Enter the price of product"/>

           <button type="submit" class="btn btn-info form-control mt-5  text-uppercase" id="btn-send" >Add product</button>
          


      </form>
 
    )
}

export default AddProduct
