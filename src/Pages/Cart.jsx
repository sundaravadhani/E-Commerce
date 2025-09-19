import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './../Components/Card/Card.css'
import { removefromCart } from '../Redux/Slice'
import { Link } from 'react-router-dom'
const Cart = () => {
     const {items}=useSelector((x)=>x.cart)
     const dispatch=useDispatch()
     let total=items.reduce((k,s)=>k+s.Price,0)
  return (
    <div className='cart'>
     {items.length==0?
     <h1 className='center'>No items in Cart</h1>
     :<div>
     <h3 className='heading'>Shopping Cart</h3>
     {items.map((x)=>(
          
          <div className="outercart">
               
               <div className="cartList">
               <Link to={`/product/${x.Id}`}>
                    <div className="flex">
                         <img src={x.Image} className='cartLogo' alt="" />
                    <div className="cartItem">
                         <h4>{x.Brand}</h4>
                         <p className='desc'>{x.Description}</p>
                         <p className='desc gray'>{x.Detail}</p>
                         <p className='price'>₹ {x.Price}</p>
                    </div>
                    </div>
               </Link>
                    <button onClick={()=>dispatch(removefromCart(x.Id))} className='del'>Delete</button>
               </div>
          </div>
     ))}
     <h3 className='total'>Shopping Total: ₹ {total}
          </h3>
     </div>}
    </div>
  )
}

export default Cart