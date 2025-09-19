import React, { useContext } from 'react'
import { ProductContext } from '../../App'
import Card from '../../Components/Card/Card'

const Womens = () => {
  const {productList}=useContext(ProductContext)
  const womensProducts=productList.filter((womens)=>womens.Category==="Womens")
  console.log(womensProducts);
  
  return (
    <div className='products mt'>
      {
        womensProducts.map((womens)=>(
          <Card {...womens}/>
        ))
      }
    </div>
  )
}

export default Womens