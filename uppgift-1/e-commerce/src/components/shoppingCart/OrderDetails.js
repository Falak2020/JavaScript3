import React from 'react'

const OrderDetails = ({item}) => {

    
    return (
        <div>
            <div className="card  p-2 mt-5 shadow navbar-bg">
              
                    <div className=" align-items-center text-center g-0 ">
                        <div>
                            <img src={item.shop.image} alt="..." className="img-fluid  order-img"/>
                        </div>
                        <div className="ms-3">
                            <div className=" mt-3">
                                <h5 >{item.shop.name}</h5>
                                <small className="text-danger">({item.quantity}st X {item.shop.price}Kr) </small> 
                                
                            </div>
                        </div>  
                       
                    </div>  
             </div>  
              
        </div>
    )
}

export default OrderDetails
