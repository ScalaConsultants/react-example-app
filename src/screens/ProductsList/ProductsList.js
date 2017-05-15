import React from 'react'
import products from '../../data/products'
import ListElement from './ListElement/ListElement'
import { Link } from 'react-router-dom'
import Screen from '../../styledComponents/Screen'

const ProductsList = () => {

  const productsList = products.map((product) =>
    <Link to={`/${product.id}`}>
      <ListElement product={product}/>
    </Link>
  )

  return (
    <Screen>
      <h3>Products</h3>

      <ul>
      {productsList}
      </ul>
    </Screen>
  )
}

export default ProductsList
