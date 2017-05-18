import {SET_PRODUCTS_SORT,SortTypes} from './actionTypes'

const initialState = {
  sortProductsType: SortTypes.PRICE_ASC
}

export function sortProducts(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS_SORT:
      return {
        ...state,
        sortProductsType: action.sort
      }
    default:
      return state
  }
}
