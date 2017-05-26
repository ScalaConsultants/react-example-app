require('normalize.css/normalize.css')
require('./App.css')

import React from 'react'
import Navbar from './Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import Shop from '../../containers/Shop/Shop'
import ShoppingCart from '../../containers/ShoppingCart/ShoppingCart'
import ProductDetails from '../../containers/ProductDetails/ProductDetails'

//let yeomanImage = require('../../images/yeoman.png');

const App = () => {
  return (
    <div className="index">
      <Navbar/>

      <Switch>
        <Route exact path='/' component={Shop}/>
        <Route path='/cart' component={ShoppingCart}/>
        <Route path='/:id' component={ProductDetails}/>
      </Switch>

    </div>
  )
}

export default App
