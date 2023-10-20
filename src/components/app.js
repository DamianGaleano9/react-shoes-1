import React, { Component } from 'react';

import ProductContainer from './products/product-container';
import NavigationBar from './navigation/navigation-bar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationBar/>
        <h1>Shoes App</h1>
   
        <ProductContainer/>


      </div>
    );
  }
}
