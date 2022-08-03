import React from 'react'
import ProductCard from './product-card.component'
import NewTestProductCard from './newTestProductCard.component'
const TestProductCard = ({products}) => {
  console.log(products)
  return (
    <div className='preview'>
      {products.map(product => <NewTestProductCard product={product} />)}

      </div>
  )
}

export default TestProductCard