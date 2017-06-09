import React from 'react'
import {connect} from 'react-redux'
import ShoppingCartView from './ShoppingCartView'

const mapStateTopProps = (state) => ({
  productsInCart:state.shoppingCart.productsInCart
})

const ShoppingCart = ({productsInCart}) => {

  const products = []

  productsInCart.map(
    id => products.find(
      product => product.id === id
    ) ? products.find(product => product.id === id).quantity++ : products.push({id,quantity:1})
  )

  return (
    <ShoppingCartView
      products={products}
    />
  )
}

export default connect(mapStateTopProps)(ShoppingCart)
