import React from 'react'
import Screen from '../../styledComponents/Screen'
import Button from '../../styledComponents/Button'
import products from '../../data/products'
import { Link } from 'react-router-dom'

const ProductDetails = (props) => {

  const id = parseInt(props.match.params.id, 10)
  const product = products.filter(product => product.id === id)[0]

  return (
    <Screen>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Description: {product.desc}</p>
      <Link to='/'>
        <Button>Back</Button>
      </Link>
    </Screen>
    )
}

export default ProductDetails
