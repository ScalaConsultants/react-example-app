import {combineReducers} from 'redux'
import {sortProducts} from './components/Filters/reducer'
import {shoppingCart} from './screens/ShoppingCart/reducer'

export default combineReducers({
  sortProducts,
  shoppingCart
})
