import React from 'react'
import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const ListElementStyle = styled.li`
    background-color: rgb(221,221,221);
    margin: 5px auto;
    width: 100%;
    height: 24vw;


    &:hover {
      background-color: rgb(174, 174, 174);
    }

    & img{
      width: 24vw;
      height: auto;
      display: block;
      float: left;
    }

    & div{
      float:left;
      width: 54vw;
      padding: 0 6vw;
    }
    
    & p{
      text-align: center;
      font-size: 4.2vw;
      font-weight: 600;
      color: black;
      margin-top: 2vw;
      margin-bottom: 4vw;
    }

    & span{
      color:black;
      font-size: 4vw;
    }
    & span:last-child{
      float:right;
    }
    
    @media (min-width: 768px) {
      height: 14vw;

      & img{
        width: 14vw;
      }
      
      & div{
        width: 44vw;
        padding: 0 6vw;
      }

      & p{
        font-size: 2.6vw;
      }

      & span{
        font-size: 2vw;
      }
    }
`

const ListElement = ({product}) => {

  return (
      <ListElementStyle>
        <img height="200" width="200" src="https://unsplash.it/200/200/?random"/>

        <div>
          <p>{product.name}</p>
          <span>category: {product.category.name}</span>
          <span>{product.price} zł</span>
        </div>
      </ListElementStyle>
    )
}

export default ListElement
