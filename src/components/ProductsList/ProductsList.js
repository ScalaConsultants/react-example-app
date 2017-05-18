import React from 'react'
import products from '../../data/products'
import ListElement from './ListElement/ListElement'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import ProductsListStyle from './ProductListStyle'
import {SortTypes} from '../Filters/actionTypes'
import {addToCart} from '../../screens/ShoppingCart/actionCreators'

const mapStateTopProps = (state) => ({
  sortProductsType:state.sortProducts.sortProductsType
})

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product,amount) => dispatch(addToCart(product,amount))
  }
}

const ProductsList = (props) => {

  function sortProducts(sortType){
    switch (sortType) {
      case SortTypes.PRICE_ASC:
        return((a,b) => a.price - b.price)
      case SortTypes.PRICE_DES:
        return((a,b) => b.price - a.price)
    }
  }

  const productsList = products.sort(sortProducts(props.sortProductsType)).map((product) =>
    <Link to={`/${product.id}`}>
      <ListElement product={product}/>
      <button onClick={() => props.addToCart(product.id,2)}>add to cart</button>
    </Link>
  )

  return (
    <ProductsListStyle>
      <h2>Products</h2>

      <ul>
      {productsList}
      </ul>
    </ProductsListStyle>
  )
}

export default connect(mapStateTopProps,mapDispatchToProps)(ProductsList)
