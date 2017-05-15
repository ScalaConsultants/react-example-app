require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Navbar from '../Navbar/Navbar';
import ProductsList from '../ProductsList/ProductsList'

//let yeomanImage = require('../../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Navbar/>
        <ProductsList/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
