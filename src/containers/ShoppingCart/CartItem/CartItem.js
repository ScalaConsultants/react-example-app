import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actionCreators'
import Button from '../../../components/Button'

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product))
  }
}

const CartItem = ({product, removeFromCart}) => {
    return (
      <li>
        <span className="productName">
          {product.name}
        </span>

        <span>
          quantity: {product.quantity}
        </span>

        <div className="price">
          <span>
            price: {product.price}
          </span>

          <Button onClick={
            () => removeFromCart(product.id)
          }>
            remove
          </Button>

        </div>
        <div style={{clear:'both'}}/>
      </li>
    )
}

export default connect(null,mapDispatchToProps)(CartItem)
