import styled from 'styled-components';

// language=SCSS prefix=dummy{ suffix=}
const Button = styled.button`
    padding: 6px 10px;
    margin: 6px;
    border: 1px solid white;
    background-color: transparent;
    font-size: 16px;

    &:focus {
      box-shadow:inset 0 0 4px 1px #848484;
    }
`;

export default Button;
