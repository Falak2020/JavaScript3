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
    const userEmail = useSelector(state => state.userReducer.userEmail)

    const dispatch = useDispatch()
    const [paid, setPaid] = useState(false)
    
    let Obj={
      
      ...currentCart,paid:true,totalPrice
    }
    // User want to pay 
    const ToPaid=()=>{
        
      let payload={
        _id,
        paidOrders:[...paidOrders,Obj],
        token
    }
    localStorage.setItem('totalPrice',Obj.totalPrice)
      changeToPaid(payload) 
      setPaid(true)   
    } 
   // Guest Not user
    const pay=()=>{
      dispatch(distroyShoppingCart())
      localStorage.setItem('totalPrice',Obj.totalPrice)
      setPaid(true) 
    }
   
   //After Paid

   const AfterPaid=(
     <div>
       {
       paid?
       <div className="text-center  ">
         <i class="fas fa-check-circle fa-2x text-success"></i>
         <h2 className="text-success mb-3">Your purchase has been paid </h2>
         <p>A confirmation will be sent to your Email {userEmail}</p>
         <table class="table ">
           <tr className="row">
             <td className="border col-6" ><p >total Price</p></td>
             <td className="border col-6 text-primary" ><p >{localStorage.getItem('totalPrice')} kr</p></td>
             
           </tr>
           <tr className="row">
             <td  className="border col-6"><p >Payment method</p></td>
             <td className="border col-6 text-primary" > <p >Kort</p></td>
           </tr>
          </table>
       </div>
       :''
       }
       
     </div>
   )

   ///////////////////////////
    useEffect(() => {
      // localStorage.removeItem('totalPrice')
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
