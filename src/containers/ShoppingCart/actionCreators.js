import {ADD_TO_CART,REMOVE_FROM_CART} from './actionTypes'

export function addToCart(product,amount) {
  return {
    type: ADD_TO_CART,
    product: product,
    amount: amount}
}

export function removeFromCart(product){
  return {
    type: REMOVE_FROM_CART,
    product: product
  }
}
