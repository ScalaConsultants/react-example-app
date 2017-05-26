import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// language=SCSS prefix=dummy{ suffix=}
const NavbarStyle = styled.div`
    height: 80px;
    background-color: rgb(24,24,24);
    padding:0 180px;
`

// language=SCSS prefix=dummy{ suffix=}
const CartButton = styled.img`
    margin:8px;
    float:right;
`

// language=SCSS prefix=dummy{ suffix=}
const Logo = styled.span`
    color: rgb(255, 255, 255);
    font-size: 46px;
    float: left;
    margin: 15px 0;
`

const Navbar = () => {
    return (
      <NavbarStyle>

        <Link to='/'>
          <Logo>SHOP NAME</Logo>
        </Link>

        <Link to='/cart'>
          <CartButton src="../../lib/images/cart.png"/>
        </Link>

      </NavbarStyle>
    )
}

export default Navbar
