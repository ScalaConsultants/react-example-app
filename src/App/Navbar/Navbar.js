import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import CartButton from './CartButton'
import { Link } from 'react-router-dom'

// language=SCSS prefix=dummy{ suffix=}
const NavbarStyle = styled.div`
    height: 80px;
    background-color: rgb(24,24,24);
    padding:0 180px;
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
