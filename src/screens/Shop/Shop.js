import React from 'react'
import Screen from '../../styledComponents/Screen'
import Filters from '../../components/Filters/Filters'
import ProductsList from '../../components/ProductsList/ProductsList'


const Shop = () => {
    return (
      <Screen>
        <Filters/>
        <ProductsList/>
      </Screen>
    )
}

export default Shop
