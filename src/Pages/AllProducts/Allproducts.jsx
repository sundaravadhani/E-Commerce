import React, { useContext } from 'react'
import Card from '../../Components/Card/Card'
import { ProductContext } from '../../App'
  
const Allproducts = () => {
  const {productList}=useContext(ProductContext)
  return (
    <div className='products mt'>
      {
        productList.map((x)=>(
          <Card {...x}/>
        ))
      }
    </div>
  )
}

export default Allproducts