import React from 'react'
import products from '../../../lib/data/products'
import ListElement from './ListItem/ListItem'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {SortTypes} from '../Filters/actionTypes'
import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const ProductsListStyle = styled.div`
    background-color: rgb(221,221,221);
    padding: 15px 0;
    & ul{
      padding: 0 20px;
    }
`

const mapStateTopProps = (state) => ({
  sortProductsType:state.sortProducts.sortProductsType
})

const ProductsList = ({sortProductsType}) => {

  function sortProducts(sortType){
    switch (sortType) {
      case SortTypes.PRICE_ASC:
        return((a,b) => a.price - b.price)
      case SortTypes.PRICE_DES:
        return((a,b) => b.price - a.price)
    }
  }

  const productsList =
    products.sort(
      sortProducts(sortProductsType)
    ).map(
      (product) =>
        <Link
          key={product.id}
          to={`/${product.id}`}>
          <ListElement
            product={product}/>
        </Link>
    )

  return (
    <ProductsListStyle>
      <ul>
      {productsList}
      </ul>
    </ProductsListStyle>
  )
}

export default connect(mapStateTopProps)(ProductsList)
