import React from 'react'
import Screen from '../../components/Screen'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const ProductDetailsView = (props) => {
    return (
      <Screen>
        <h3>{props.product.name}</h3>

        <p>Price: {props.product.price}</p>
        <p>Category: {props.category}</p>
        <p>Description: {props.product.desc}</p>

        <Button onClick={() => props.addToCart()}>
          Add to cart
        </Button>

        <Link to='/'>
          <Button>Back to shop</Button>
        </Link>
      </Screen>
    )
}

export default ProductDetailsView
