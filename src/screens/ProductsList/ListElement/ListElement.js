import React from 'react'
import ListElementStyle from './ListElementStyle'

const ListElement = (props) => {
    return (
      <ListElementStyle>
        <p>{props.product.name}</p>
        <p>{props.product.price}</p>
      </ListElementStyle>
    )
}

export default ListElement
