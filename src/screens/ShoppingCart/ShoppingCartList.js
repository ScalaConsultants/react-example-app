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

export default ShoppingCartList
