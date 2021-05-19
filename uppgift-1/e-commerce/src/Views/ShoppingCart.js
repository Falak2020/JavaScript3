import React,{ useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Cartdetails from '../components/shoppingCart/Cartdetails'
import {NavLink} from 'react-router-dom'
import { changeToPaid,getUserCart,distroyShoppingCart } from '../store/actions/shoppingAction'

const ShoppingCart = () => {
   
    const shoppingCart = useSelector(state => state.shoppingCart.shoppings)
    const currentCart = useSelector(state => state.shoppingCart.currentCart)

    const paidOrders = useSelector(state => state.shoppingCart.paidOrders)

    const totalPrice = useSelector(state => state.shoppingCart.totalPrice)
    
    const token = useSelector(state=>state.userReducer.token)
    const _id = useSelector(state => state.userReducer.userId)
    const dispatch = useDispatch()
    const [paid, setPaid] = useState(false)
    let Obj={
      
      ...currentCart,paid:true
    }
    // User want to pay 
    const ToPaid=()=>{
        
      let payload={
        _id,
        paidOrders:[...paidOrders,Obj],
        token
    }
      
      changeToPaid(payload) 
      setPaid(true)   
    } 
   // Guest Not user
    const pay=()=>{
      dispatch(distroyShoppingCart())
      console.log('paid')
      setPaid(true) 
    }
   
   //After Paid

   const AfterPaid=(
     <div>
       {paid?
       <div className="text-center">
         <h2>Your purchase has been paid </h2>
         <div className="row">
           <h3 className="col-6">total Price</h3>
           <p className="col-6">{totalPrice}</p>
           <h3 className="col-6">Payment method</h3>
           <p className="col-6">Kort</p>
         </div>
          
       </div>
      

       :''
       }
       
     </div>
   )

   ///////////////////////////
    useEffect(() => {
      if(_id)
      dispatch(getUserCart(_id))
    }, [currentCart])

    return (
        <div>
            {
              (shoppingCart.length>0)? shoppingCart.map(item => (<Cartdetails key={item.shop._id} item={item}/>))
             
              : 
              <div className="card mt-5 p-4 text-center"> 
                <div className="card-header text-info"><i className="fas fa-shopping-bag"></i></div>
                <div className="card-body">
                      <p className="card-text">
                          Your Shopping Cart is empty - but it does not have to be
                      </p>
                      <NavLink exact to ='/' className="btn btn-primary">Continue Shopping</NavLink>
                 </div>       
              </div>
            
            }
            <div className="card p-3 ">
             
             {
               (totalPrice>0) &&<strong className="  text-center">Total Price={totalPrice}</strong>
     
            }
            
            <div className="text-center ">
              {
              (totalPrice>0 && _id) && <button className="btn btn-gray text-white w-50  mt-3 p-3 " onClick={ToPaid}>go to checkout</button>   
                
              } 
             
            </div>
            <div className="text-center ">
              {
              (totalPrice>0 && !_id) && <button className="btn btn-gray text-white w-50  mt-3 p-3 " onClick={pay}>go to checkout</button> 
              
              } 
             
            </div> 
            
            {AfterPaid}
         </div>   
        </div>
    )
}

export default ShoppingCart
