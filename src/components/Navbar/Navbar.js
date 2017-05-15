import React from 'react'

import NavbarStyled from './NavbarStyle';
import Logo from './Logo';
import CartButton from './CartButton'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <NavbarStyled>
        <Logo><Link to='/'>SHOP NAME</Link></Logo>
        <CartButton><Link to='/cart'>Cart</Link></CartButton>
      </NavbarStyled>
    )
}

export default Navbar
