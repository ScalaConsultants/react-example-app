import React from 'react'
import NavbarStyled from './NavbarStyle'
import Logo from './Logo'
import CartButton from './CartButton'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <NavbarStyled>

        <Link to='/'>
          <Logo>SHOP NAME</Logo>
        </Link>

        <Link to='/cart'>
          <CartButton src="../../images/cart.png"/>
        </Link>

      </NavbarStyled>
    )
}

export default Navbar
