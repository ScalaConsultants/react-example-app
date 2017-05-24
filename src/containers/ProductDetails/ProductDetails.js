import React from 'react'
import Screen from '../../components/Screen'
import Button from '../../components/Button'
import products from '../../lib/data/products'
import categories from '../../lib/data/categories'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {addToCart} from '../ShoppingCart/actionCreators'

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product,amount) => dispatch(addToCart(product,amount))
  }
}

const ProductDetails = (props) => {

  const id = parseInt(props.match.params.id, 10)
  const product = products.find(product => product.id === id)
  const category = categories.find(category => category.id === product.category).name

  return (
    <Screen>
      <h3>{product.name}</h3>

      <p>Price: {product.price}</p>
      <p>Category: {category}</p>
      <p>Description: {product.desc}</p>

      <Button onClick={() => props.addToCart(product.id)}>
        Add to cart
      </Button>

      <Link to='/'>
        <Button>Back to shop</Button>
      </Link>
    </Screen>
    )
}

export default connect(null,mapDispatchToProps)(ProductDetails)
