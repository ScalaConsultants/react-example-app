import React from 'react'
import products from '../../data/products'

const ProductsList = () => {

  const productsList = products.map((product) =>
    <li>{product.name}</li>
  )

  return (
    <ul>
    {productsList}
    </ul>
  )
}

export default ProductsList
