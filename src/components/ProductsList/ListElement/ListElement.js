import React from 'react'
import ListElementStyle from './ListElementStyle'
import categories from '../../../data/categories'

const ListElement = (props) => {

  const category = categories.filter(category => category.id === props.product.category)[0].name

  return (
      <ListElementStyle>
        <div className="image"/>
        <div className="content">
          <h3>{props.product.name}</h3>
          <p>price: {props.product.price}</p>
          <p>category: {category}</p>
        </div>
      </ListElementStyle>
    )
}

export default ListElement
