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
const Filters = ({setProductsSort, sortType}) => {
    return (
      <FiltersView
        sortType={sortType}
        sortPriceAsc={() => setProductsSort('PRICE_ASC')}
        sortPriceDes={() => setProductsSort('PRICE_DES')}
        />
    )
}

export default connect(mapStateTopProps,mapDispatchToProps)(Filters)
