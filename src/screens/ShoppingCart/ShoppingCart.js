import React from 'react'
import {connect} from 'react-redux'
import Screen from '../../styledComponents/Screen'
import Button from '../../styledComponents/Button'
import { Link } from 'react-router-dom'
import {removeFromCart} from './actionCreators'
import products from '../../data/products'
import ShoppingCartList from './ShoppingCartList'

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

        <ShoppingCartList>
        {props.productsInCart.length!== 0 ? props.productsInCart.map(
          product =>
            <li>{products.filter( prod => prod.id === product).map(product => product.name)}
              <Button onClick={() => props.removeFromCart(product)}>
                remove
              </Button>
            </li>
        ) : <li>Cart is empty</li>}
        </ShoppingCartList>

        <Link to='/'>
          <Button>Back to shop</Button>
        </Link>
      </Screen>
    )
}

export default connect(mapStateTopProps,mapDispatchToProps)(ShoppingCart)
