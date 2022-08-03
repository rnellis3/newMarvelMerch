import React from 'react'
import SingleTest from './singleTest.component'
const NewTestProductCard = ({product}) => {
    console.log('from the new test', product)
  return (
    <div>{product.items.map(item => <SingleTest item={item} />)}</div>
  )
}

export default NewTestProductCard