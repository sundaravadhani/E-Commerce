import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../App'
import '../Card/Card.css'
import { addtoCart } from '../../Redux/Slice'
import { useDispatch } from 'react-redux'
const Details = () => {
     const dispatch=useDispatch()
     let {productList}=useContext(ProductContext)
     let {Id}=useParams()
     let selectedProduct=productList.find((x)=>x.Id==Id)
     function handleAddtoCart(){
      dispatch(addtoCart(selectedProduct))
     }
  return (
    <div>
      <div className="flex product_cart">
         <img src={selectedProduct.Image} alt="" className='card_img'/>
         <div className="">
            <h1 className='height'>{selectedProduct.Brand}</h1>
            <i className='small-med'>{selectedProduct.Description}</i>
            <br /><br />
          <p className='detail gray'>{selectedProduct.Detail}</p><br />
          <p className='med inline mbottom'><sup className='small'>&#8377;</sup>{selectedProduct.Price} </p>
          <span className='grey small'>M.R.P: <s> &#8377; {selectedProduct.MRP}</s>{selectedProduct.Offer}</span>
          <p className='small mbottom mtop'>FREE delivery <b>{selectedProduct.Delivery}</b> </p>
          <button onClick={handleAddtoCart} className='cardbtn mbottom mtop'>Add to cart</button>
         </div>
      </div>
    </div>
  )
}

export default Details