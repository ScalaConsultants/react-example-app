import React from 'react'
import Button from '../../../components/Button'

import styled from 'styled-components'

// language=SCSS prefix=dummy{ suffix=}
const FilterStyle = styled.div`
    background-color: rgb(221,221,221);
    width: 100%;
    & span{
      margin-left: 6vw;
    }
`

const FiltersView = ({sortType, sortPriceAsc, sortPriceDes}) => {
    return (
      <FilterStyle>
        <span>Sort by price:</span>

        <Button isActive={sortType === 'PRICE_ASC'}
                onClick={() => sortPriceAsc()}>
          Lowest
        </Button>

        <Button isActive={sortType === 'PRICE_DES'}
                onClick={() => sortPriceDes()}>
          Highest
        </Button>

      </FilterStyle>
    )
}

export default FiltersView
