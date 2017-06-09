import React from 'react'
import ListElement from './ListItem/ListItem'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {SortTypes} from '../Filters/actionTypes'
import { gql, graphql } from 'react-apollo'

const mapStateTopProps = (state) => ({
  sortProductsType:state.sortProducts.sortProductsType
})

const ProductsList = ({sortProductsType, data}) => {

  function sortProducts(sortType){
    switch (sortType) {
      case SortTypes.PRICE_ASC:
        return((a,b) => a.price - b.price)
      case SortTypes.PRICE_DES:
        return((a,b) => b.price - a.price)
    }
  }

  if(data.loading){
    return <div>LOADING</div>
  }

  const products = []

  data.allProducts.map( product => products.push(product))

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

const productInfo = gql`
  query {
    allProducts { 
      id
      name
      price
      category {
        name
      }
    }
  }`

const ProductsListData = graphql(productInfo)(ProductsList)

export default connect(mapStateTopProps)(ProductsListData)
