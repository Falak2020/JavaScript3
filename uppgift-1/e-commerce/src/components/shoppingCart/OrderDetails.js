import React from 'react'

const OrderDetails = ({item}) => {
    return (
        <div>
            <div className="card px-5 py-3 mt-5">
              
                    <div className=" align-items-center g-0 ">
                        <div>
                            <img src={item.shop.image} alt="..." className="img-fluid order-img"/>
                        </div>
                        <div className="ms-3">
                            <div className=" mt-3">
                                <h4  >{item.shop.name}</h4>
                                <small>Price:{item.quantity}st X {item.shop.price} </small> 
                                
                            </div>
                        </div>  
                       
                    </div>  
             </div>  
              
        </div>
    )
}

export default OrderDetails
