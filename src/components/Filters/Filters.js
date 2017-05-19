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
        <span>Sort by price:</span>
        <Button onClick={() => props.setProductsSort('PRICE_ASC')}>Lowest</Button>
        <Button onClick={() => props.setProductsSort('PRICE_DES')}>Highest</Button>
      </FilterStyle>
    )
}

export default connect(null,mapDispatchToProps)(Filters)
