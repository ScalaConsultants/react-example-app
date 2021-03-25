import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../ShoppingCart/actionCreators'
import { gql, graphql } from 'react-apollo'
import ProductsDetailsView from './ProductDetailsView'

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product))
  }
}

const ProductDetails = ({data, addToCart}) => {

  if(data.loading){
    return <div>LOADING</div>
  }

  return (
    <ProductsDetailsView
      product={data.Product}
      addToCart={()=> addToCart(data.Product.id)}/>
    )
}

const productDetailsQuery = gql`
  query ProductQuery($id: ID!){
    Product(id: $id) { 
      id
      name
      price
      desc
      category {
        name
      }
    }
  }`

const ProductDetailsData = graphql(productDetailsQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(ProductDetails)

export default connect(null,mapDispatchToProps)(ProductDetailsData)
