import React from 'react'
import Screen from '../../components/Screen'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const ShoppingCartList = styled.ul`
    & li{
      font-size: 20px;
      border-bottom: 1px black solid;
    }
    & .productName{
      font-size:24px;
      margin-right: 100px;
      float: left;
    }
    & .price{
      float:right;
    }
`

const ShoppingCartView = (props) => {
    return (
      <Screen>
        <h2>Your Shopping Cart:</h2>

        <ShoppingCartList>

          {props.productsTable.length!== 0 ? props.productsTable.map(
            product =>
              <CartItem key={product[3]} product={product}/>
          ) : <li>Cart is empty</li>}

          <li>
            <div className="price">
              Total:{props.sum}
            </div>
          </li>
        </ShoppingCartList>

        <Link to='/'>
          <Button>Back to shop</Button>
        </Link>
      </Screen>
    )
}

export default ShoppingCartView
