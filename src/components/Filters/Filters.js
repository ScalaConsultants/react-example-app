import React from 'react'
import FilterStyle from './FiltersStyle'
import Button from '../../styledComponents/Button'

const Filters = () => {
    return (
      <FilterStyle>
        <h2>Filters</h2>
        <p>Sort by price:</p>
        <Button>Highest</Button>
        <Button>Lowest</Button>
      </FilterStyle>
    )
}

export default Filters
