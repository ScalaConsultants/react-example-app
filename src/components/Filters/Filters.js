import React from 'react'
import {connect} from 'react-redux'
import FilterStyle from './FiltersStyle'
import Button from '../../styledComponents/Button'
import {setProductsSort} from './actionCreators'

const mapDispatchToProps = (dispatch) => {
  return {
    setProductsSort: (sortType) => dispatch(setProductsSort(sortType))
  }
}
const Filters = (props) => {
    return (
      <FilterStyle>
        <h2>Filters</h2>
        <p>Sort by price:</p>
        <Button onClick={() => props.setProductsSort('PRICE_ASC')}>Highest</Button>
        <Button onClick={() => props.setProductsSort('PRICE_DES')}>Lowest</Button>
      </FilterStyle>
    )
}

export default connect(null,mapDispatchToProps)(Filters)
