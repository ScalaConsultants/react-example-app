import React from 'react'
import {connect} from 'react-redux'
import {setProductsSort} from './actionCreators'
import FiltersView from './FiltersView'

const mapStateTopProps = (state) => ({
  sortType:state.sortProducts.sortProductsType
})

const mapDispatchToProps = (dispatch) => {
  return {
    setProductsSort: (sortType) => dispatch(setProductsSort(sortType))
  }
}
const Filters = (props) => {
    return (
      <FiltersView
        sortType={props.sortType}
        sortPriceAsc={() => props.setProductsSort('PRICE_ASC')}
        sortPriceDes={() => props.setProductsSort('PRICE_DES')}
        />
    )
}

export default connect(mapStateTopProps,mapDispatchToProps)(Filters)
