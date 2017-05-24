import React from 'react'
import Screen from '../../components/Screen'
import Filters from './Filters/Filters'
import ProductsList from './ProductsList/ProductsList'

const Shop = () => {
    return (
      <Screen>
        <Filters/>
        <ProductsList/>
      </Screen>
    )
}

export default Shop
