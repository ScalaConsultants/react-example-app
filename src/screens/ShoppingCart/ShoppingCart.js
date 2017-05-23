import React from 'react'
import {connect} from 'react-redux'
import Screen from '../../styledComponents/Screen'
import Button from '../../styledComponents/Button'
import { Link } from 'react-router-dom'
import {removeFromCart} from './actionCreators'
import productsData from '../../data/products'
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

  const products= {}

  props.productsInCart.map(product => {
    products[product] ? products[product]++ : products[product] = 1
  })

  let sum = 0
  let productsTable = []

  for(const product in products){

    const name =
      productsData.find(
        prod => prod.id === parseInt(product)
      ).name

    const price =
      productsData.find(
        prod => prod.id === parseInt(product)
      ).price

    sum += price * products[product]

    productsTable.push([name,price,products[product],parseInt(product)])
  }

    return (
      <Screen>
        <h2>Your Shopping Cart:</h2>

        <ShoppingCartList>

        {productsTable.length!== 0 ? productsTable.map(
          product =>
            <li>
              <span className="productName">
                {product[0]}
              </span>

              <span>
                quantity: {product[2]}
              </span>

              <div className="price">
                <span>
                  price: {product[1]}
                </span>

                <Button onClick={() => props.removeFromCart(product[3])}>
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
