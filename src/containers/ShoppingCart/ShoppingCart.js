import React from 'react'
import {connect} from 'react-redux'
import ShoppingCartView from './ShoppingCartView'
import { gql, graphql } from 'react-apollo'

const mapStateTopProps = (state) => ({
  productsInCart:state.shoppingCart.productsInCart
})

const ShoppingCart = ({data,productsInCart}) => {

  let products = []

  let totalSum = 0

  if(!data.loading){

    productsInCart.map(
      id => products.find(
        product => product.id === id
      ) ? products.find(product => product.id === id).quantity++ : products.push({id,quantity:1})
    )

    products.map(
      product => {
        product.name = data.allProducts.find(
          productData => productData.id === product.id
          ).name

        product.price = data.allProducts.find(
          productData => productData.id === product.id
          ).price

        totalSum += product.quantity * product.price
      }
    )
  }

  return (
    <ShoppingCartView
      products = {products}
      totalSum = {totalSum}
    />
  )
}

const productsInCart = gql`
  query ProductsInCartQuery($ids: [ID!]!){
    allProducts(filter:{ id_in: $ids}) { 
      id
      name
      price
    }
  }`

const ShoppingCartData = graphql(productsInCart, {
  options: (ownProps) => ({
    variables: {
      ids: ownProps.productsInCart
    }
  })
})(ShoppingCart)

export default connect(mapStateTopProps)(ShoppingCartData)
