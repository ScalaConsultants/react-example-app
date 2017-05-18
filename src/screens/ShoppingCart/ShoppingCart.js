import React from 'react'
import {connect} from 'react-redux'
import Screen from '../../styledComponents/Screen'
import Button from '../../styledComponents/Button'
import { Link } from 'react-router-dom'
import {removeFromCart} from './actionCreators'
import products from '../../data/products'


const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product))
  }
}

const mapStateTopProps = (state) => ({
  productsInCart:state.shoppingCart.productsInCart
})

const ShoppingCart = (props) => {
    return (
      <Screen>
        <h2>Your Shopping Cart:</h2>
        {console.log(props.productsInCart)}
        <ul>
        {props.productsInCart ? props.productsInCart.map(
          product => <li>{products.filter( prod => prod.id === product).map(product => product.name)}<button onClick={() => props.removeFromCart(product)}>remove</button></li>
          ) : 'Cart is empty'}
        </ul>

        <Link to='/'>
          <Button>Back</Button>
        </Link>
      </Screen>
    )
}

export default connect(mapStateTopProps,mapDispatchToProps)(ShoppingCart)
