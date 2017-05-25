import React from 'react'
import Button from '../../../components/Button'

import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const FilterStyle = styled.div`
    background-color: rgb(221,221,221);
    padding: 0 40px;
`

const FiltersView = (props) => {
    return (
      <FilterStyle>
        <span>Sort by price:</span>

        <Button isActive={props.sortType === 'PRICE_ASC'}
                onClick={() => props.sortPriceAsc()}>
          Lowest
        </Button>

        <Button isActive={props.sortType === 'PRICE_DES'}
                onClick={() => props.sortPriceDes()}>
          Highest
        </Button>

      </FilterStyle>
    )
}

export default FiltersView
