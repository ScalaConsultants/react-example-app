import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actionCreators'
import Button from '../../../components/Button'

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product))
  }
}

const CartItem = (props) => {
    return (
      <li>
              <span className="productName">
                {props.product[0]}
              </span>

        <span>
                quantity: {props.product[2]}
              </span>

        <div className="price">
                <span>
                  price: {props.product[1]}
                </span>

          <Button onClick={() => props.removeFromCart(props.product[3])}>
            remove
          </Button>
        </div>
        <div style={{clear:'both'}}/>
      </li>
    )
}

export default connect(null,mapDispatchToProps)(CartItem)
