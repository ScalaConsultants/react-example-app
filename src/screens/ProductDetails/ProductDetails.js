import React from 'react'
import Screen from '../../styledComponents/Screen'
import Button from '../../styledComponents/Button'
import products from '../../data/products'
import categories from '../../data/categories'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {addToCart} from '../../screens/ShoppingCart/actionCreators'


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product,amount) => dispatch(addToCart(product,amount))
  }
}

const ProductDetails = (props) => {

  const id = parseInt(props.match.params.id, 10)
  const product = products.filter(product => product.id === id)[0]
  const category = categories.filter(category => category.id === product.category)[0].name

  return (
    <Screen>
      <h3>{product.name}</h3>

      <p>Price: {product.price}</p>
      <p>Category: {category}</p>
      <p>Description: {product.desc}</p>

      <button onClick={() => props.addToCart(product.id,2)}>
        add to cart
      </button>

      <Link to='/'>
        <Button>Back</Button>
      </Link>
    </Screen>
    )
}

export default connect(null,mapDispatchToProps)(ProductDetails)
