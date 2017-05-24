import React from 'react'
import ListElementStyle from './ListElementStyle'
import categories from '../../../../lib/data/categories'

const ListElement = (props) => {

  const category = categories.find(category => category.id === props.product.category).name

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