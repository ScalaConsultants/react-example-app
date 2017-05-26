import React from 'react'
import products from '../../../lib/data/products'
import ListElement from './ListItem/ListItem'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {SortTypes} from '../Filters/actionTypes'

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
    <ul>
    {productsList}
    </ul>
  )
}

export default connect(mapStateTopProps)(ProductsList)
