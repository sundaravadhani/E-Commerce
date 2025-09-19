import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({Brand,Description,Price,MRP,Offer,Delivery,Image,Id}) => {
  return (
    <Link to={`/product/${Id}`} className='hover'>
    <div className="Card mb">
     <div className="innercard">
          <img src={Image} alt="Shirt" className='cardimage'/>
          <div className="content">
          <h3 className='brand mbottom'>{Brand}</h3>
          <p className='small-med mbottom'>{Description}</p>
          <p className='med inline mbottom'><sup className='small'>&#8377;</sup>{Price} </p>
               <span className='grey small'>M.R.P: <s> &#8377; {MRP}</s>{Offer}</span>
          <p className='small mbottom mtop'>FREE delivery <b>{Delivery}</b> </p>
          {/* <button className='cardbtn mbottom mtop'>Add to cart</button> */}
          </div>
     </div>
    </div>
    </Link>
  )
}

export default Card