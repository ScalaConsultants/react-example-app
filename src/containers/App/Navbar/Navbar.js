import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// language=SCSS prefix=dummy{ suffix=}
const NavbarStyle = styled.div`
    height: 80px;
    background-color: rgb(24,24,24);
    width: 100%;
    
    @media (min-width: 768px) {
      div{
        width: 70vw;
        margin:0 auto;
      }
    }
`

// language=SCSS prefix=dummy{ suffix=}
const CartButton = styled.img`
    float:right;
    margin:6px;
`

// language=SCSS prefix=dummy{ suffix=}
const Logo = styled.span`
    color: rgb(255, 255, 255);
    font-size: 42px;
    float: left;
    margin: 16px;
`

const Navbar = () => {
    return (
      <NavbarStyle>
        <div>
          <Link to='/'>
            <Logo>LOGO</Logo>
          </Link>

          <Link to='/cart'>
            <CartButton src="../../lib/images/cart.png"/>
          </Link>
        </div>
      </NavbarStyle>
    )
}

export default Navbar
