import React from 'react'
import {connect} from 'react-redux'
import productsData from '../../lib/data/products'
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

  let sum = 0

  for(const product of products){

    product.name =
      productsData.find(
        prod => prod.id === product.id
      ).name

    product.price =
      productsData.find(
        prod => prod.id === product.id
      ).price

    sum+=product.quantity*product.price
  }

  return (
    <ShoppingCartView
      sum={sum}
      products={products}
    />
  )
}

export default connect(mapStateTopProps)(ShoppingCart)
