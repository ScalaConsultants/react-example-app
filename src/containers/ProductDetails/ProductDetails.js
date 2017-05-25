import React from 'react'
import products from '../../lib/data/products'
import categories from '../../lib/data/categories'
import {connect} from 'react-redux'
import {addToCart} from '../ShoppingCart/actionCreators'
import ProductsDetailsView from './ProductDetailsView'

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product))
  }
}

const ProductDetails = (props) => {

  const id = parseInt(props.match.params.id, 10)
  const product = products.find(product => product.id === id)
  const category = categories.find(category => category.id === product.category).name

  return (
    <ProductsDetailsView
      product={product}
      category={category}
      addToCart={()=> props.addToCart(product.id)}/>
    )
}

export default connect(null,mapDispatchToProps)(ProductDetails)
