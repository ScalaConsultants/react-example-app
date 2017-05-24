import {combineReducers} from 'redux'
import {sortProducts} from './containers/Shop/Filters/reducer'
import {shoppingCart} from './containers/ShoppingCart/reducer'

export default combineReducers({
  sortProducts,
  shoppingCart
})
