require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Switch, Route } from 'react-router-dom'
import ProductsList from '../ProductsList/ProductsList'
//import ShoppingCart from '../ShoppingCart/ShoppingCart'

//let yeomanImage = require('../../images/yeoman.png');

const App = () => {
  return (
    <div className="index">
      <Navbar/>

      <Switch>
        <Route exact path='/' component={ProductsList}/>
        {/*<Route path='/cart' component={ShoppingCart}/>*/}
      </Switch>

    </div>
  );
}

export default App;
