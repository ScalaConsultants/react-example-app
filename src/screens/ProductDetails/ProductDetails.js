import React from 'react'
import Screen from '../../styledComponents/Screen'
import products from '../../data/products'

const ProductDetails = (props) => {

  const id = parseInt(props.match.params.id, 10)
  const product = products.filter(product => product.id === id)[0]

  return (
    <Screen>
      <h3>Product Details</h3>
      <p>product: {product.name}</p>
      <p>price: {product.price}</p>
    </Screen>
    )
}

export default ProductDetails
