import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actionCreators'
import Button from '../../../components/Button'
import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const CartItemStyle = styled.li`
  padding: 1vw 0;
`
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product))
  }
}


const CartItem = ({product, removeFromCart}) => {
    return (
      <CartItemStyle>
        <span className="productName">
          {product.name}
        </span>

        <span>
          {product.quantity}
        </span>

        <span>
          {product.price} zł
        </span>

        <Button onClick={
          () => removeFromCart(product.id)
        }>
          remove
        </Button>

      </CartItemStyle>
    )
}

export default connect(null,mapDispatchToProps)(CartItem)
