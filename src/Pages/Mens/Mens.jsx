import React, { useContext } from 'react'
import { ProductContext } from '../../App'
import Card from '../../Components/Card/Card';

const Mens = () => {
  const {productList}=useContext(ProductContext)
  const mensProducts=productList.filter((mens)=>mens.Category==="Mens")

  return (
    <div className='products mt'>
      {
        mensProducts.map((mens)=>(
          <Card {...mens}/>
        ))
      }
      
    </div>
  )
}

export default Mens