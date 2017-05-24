import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const Button = styled.button`
    padding: 6px 10px;
    margin: 6px;
    border: 1px solid white;
    background-color: transparent;
    font-size: 16px;
    box-shadow: ${props => props.isActive ? 'inset 0 0 4px 1px #848484' : 'none'};
    
    &:hover{
      box-shadow: inset 0 0 2px 1px #9b9b9b;
    }
    
    &:active{
      box-shadow: inset 0 0 10px 1px #919191;
    }
`

export default Button
