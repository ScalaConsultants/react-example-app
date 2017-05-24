import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const ListElement = styled.li`
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

export default ListElement
