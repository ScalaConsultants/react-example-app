import React from 'react'
import Screen from '../../styledComponents/Screen'
import Button from '../../styledComponents/Button'
import { Link } from 'react-router-dom'


const ShoppingCart = () => {
    return (
      <Screen>
        <h2>Your Shopping Cart:</h2>

        <Link to='/'>
          <Button>Back</Button>
        </Link>
      </Screen>
    )
}

export default ShoppingCart
