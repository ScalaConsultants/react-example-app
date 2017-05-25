import React from 'react'
import {connect} from 'react-redux'
import productsData from '../../lib/data/products'
import ShoppingCartView from './ShoppingCartView'

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
    <ShoppingCartView
      sum={sum}
      productsTable={productsTable}
    />
  )
}

export default connect(mapStateTopProps)(ShoppingCart)
