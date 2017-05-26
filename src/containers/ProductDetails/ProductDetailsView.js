import React from 'react'
import Screen from '../../components/Screen'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const ProductDetailsView = ({product, category, addToCart}) => {
    return (
      <Screen>
        <h3>{product.name}</h3>

        <p>Price: {product.price}</p>
        <p>Category: {category}</p>
        <p>Description: {product.desc}</p>

        <Button onClick={() => addToCart()}>
          Add to cart
        </Button>

        <Link to='/'>
          <Button>Back to shop</Button>
        </Link>
      </Screen>
    )
}

export default ProductDetailsView
