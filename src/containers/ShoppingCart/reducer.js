import {ADD_TO_CART,REMOVE_FROM_CART} from './actionTypes'

const initialState = {
  productsInCart:[]
}

export function shoppingCart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        productsInCart: [...state.productsInCart,action.product]
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        productsInCart: state.productsInCart.filter(product => product !== action.product)
      }
    default:
      return state
  }
}
