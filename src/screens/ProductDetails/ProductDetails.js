import React from 'react'
import Screen from '../../styledComponents/Screen'
import Button from '../../styledComponents/Button'
import products from '../../data/products'
import categories from '../../data/categories'
import { Link } from 'react-router-dom'

const ProductDetails = (props) => {

  const id = parseInt(props.match.params.id, 10)
  const product = products.filter(product => product.id === id)[0]
  const category = categories.filter(category => category.id === product.category)[0].name

  return (
    <Screen>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Category: {category}</p>
      <p>Description: {product.desc}</p>
      <Link to='/'>
        <Button>Back</Button>
      </Link>
    </Screen>
    )
}

export default ProductDetails
