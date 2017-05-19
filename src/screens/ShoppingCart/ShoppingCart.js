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
  let sum = 0;
    return (
      <Screen>
        <h2>Your Shopping Cart:</h2>

        <ShoppingCartList>
        {props.productsInCart.length!== 0 ? props.productsInCart.map(
          product =>
            <li>
              <span className="productName">
                {products.filter( prod => prod.id === product).map(product => product.name)}
              </span>

              <div className="price">
                <span>
                  price: {products.filter( prod => prod.id === product).map(product => {
                  sum+= product.price
                  return product.price
                  }
                )}
                </span>

                <Button onClick={() => props.removeFromCart(product)}>
                  remove
                </Button>
              </div>
              <div style={{clear:'both'}}/>
            </li>
        ) : <li>Cart is empty</li>}

        <li>
          <div className="price">
            Total:{sum}
          </div>
        </li>
        </ShoppingCartList>

        <Link to='/'>
          <Button>Back to shop</Button>
        </Link>
      </Screen>
    )
}

export default connect(mapStateTopProps,mapDispatchToProps)(ShoppingCart)
