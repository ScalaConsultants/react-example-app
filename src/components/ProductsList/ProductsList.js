import React from 'react'
import products from '../../data/products'
import ListElement from './ListElement/ListElement'
import { Link } from 'react-router-dom'
import ProductsListStyle from './ProductListStyle'

const ProductsList = () => {

  const productsList = products.sort((a,b) => a.price - b.price).map((product) =>
    <Link to={`/${product.id}`}>
      <ListElement product={product}/>
    </Link>
  )

  return (
    <ProductsListStyle>
      <h2>Products</h2>

      <ul>
      {productsList}
      </ul>
    </ProductsListStyle>
  )
}

export default ProductsList
