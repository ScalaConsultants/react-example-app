import React from 'react'
import Screen from '../../components/Screen'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const ShoppingCartList = styled.ul`

    padding-top: 2vw;
    font-size: 4.5vw;
    
    & p{
      fontSize: 6vw;
      fontWeight: 600;
      textAlign: center;
      padding-bottom: 2vw;
    }

    & li{
      height: 20vw;
      border-bottom: 1px black solid;
    }

    & li:last-of-type{
      border-bottom: none;
    }

    & .price{
      float:right;
    }

    & span{
      display:block;
      text-align: center;
    }
    
    & .tags{
      display: none;
    }

    @media (min-width: 768px) {
      font-size: 1.6vw;

      & span{
        width: 27%;
        display:inline-block;
        text-align: left;
      }
      
      & p{
        fontSize: 2vw;
      }

      & li{
        height: 4vw;
      }
      
      .tags{
        display:block;
      }
    }
`

const ShoppingCartView = ({sum, products}) => {

  const isProduct = products.length!== 0

    return (
      <Screen>
        <ShoppingCartList>
          <p>Your Shopping Cart</p>

          {isProduct ?
            <li className="tags">
              <span>product</span>
              <span>quantity</span>
              <span>price</span>
            </li> :
            <li style={{textAlign:'center'}}>Cart is empty</li>}

          {isProduct ? products.map(
              product =>
                <CartItem key={product.id} product={product}/>
            ) : false
           }

          {isProduct ?
            <li>
              <div className="price">
                Total:{sum}
              </div>
            </li> : false
          }

        </ShoppingCartList>

        <Link to='/'>
          <Button>Back to shop</Button>
        </Link>
      </Screen>
    )
}

export default ShoppingCartView
