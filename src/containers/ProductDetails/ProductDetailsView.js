import React from 'react'
import Screen from '../../components/Screen'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const ProductDetailsStyle = styled.div`
  padding: 0 4vw;
  & img{
    margin: 0 auto;
    display: block;
  }
  
  & p:first-of-type{
    text-align: center;
    font-size: 4vh;
    font-weight: 600;
  }

   & p{
     margin: 4vw 0;
   }

  & p,span{
    font-size: 3vh;
  }

  & span:first-of-type, Button:last-of-type{
    float: right;
  }
  
  Button:first-child{
    float: left;
  }

  @media (min-width: 768px) {
    & p{
      margin: 2vw 0;
    }
  }
`

const ProductDetailsView = ({product, addToCart}) => {
    return (
      <Screen>
        <ProductDetailsStyle>
          <img height="200" width="200" src="https://unsplash.it/200/200/?random"/>
          <p>{product.name}</p>
          <span>{product.price} zł</span>
          <span>Category: {product.category.name}</span>
          <p>Description: {product.desc}</p>

          <Link to='/'>
            <Button>Back to shop</Button>
          </Link>

          <Button onClick={() => addToCart()}>
            Add to cart
          </Button>
        </ProductDetailsStyle>
      </Screen>
    )
}

export default ProductDetailsView
