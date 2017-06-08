import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actionCreators'
import Button from '../../../components/Button'
import styled from 'styled-components'
import { gql, graphql } from 'react-apollo'

// language=SCSS prefix=dummy{ suffix=}
const CartItemStyle = styled.li`
  padding: 1vw 0;
`
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product))
  }
}


const CartItem = ({product, removeFromCart, data}) => {
    return (
      <CartItemStyle>
        <span className="productName">
          {data.Product.name}
        </span>

        <span>
          {product.quantity}
        </span>

        <span>
          {data.Product.price} zł
        </span>

        <Button onClick={
          () => removeFromCart(data.Product.id)
        }>
          remove
        </Button>

      </CartItemStyle>
    )
}

const productInCart = gql`
  query ProductInCartQuery($id: ID!){
    Product(id: $id) { 
      id
      name
      price
    }
  }`

const ProductInCart = graphql(productInCart, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.product.id
    }
  })
})(CartItem)

export default connect(null,mapDispatchToProps)(ProductInCart)
