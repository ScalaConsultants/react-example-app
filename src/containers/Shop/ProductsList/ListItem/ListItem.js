import React from 'react'
import categories from '../../../../lib/data/categories'
import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const ListElementStyle = styled.li`
    font-size: 20px;
    margin: 20px 0;
    padding: 20px;
    border: black 2px solid;
    height: 100px;

    &:hover {
      background-color: rgb(174, 174, 174);
    }

    & .image {
      width: 100px;
      height: 100px;
      background-color: #ffecd8;
      text-align: center;
      float:left;
    }

    & .content{
      float:left;
      margin-left: 80px;
    }

    & h3{
      margin: 0;
      text-align: left;
      color: black;
    }

    & p{
      color:black;
    }
`

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
