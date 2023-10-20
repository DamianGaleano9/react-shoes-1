import React, { Component } from 'react';

import ProductContainer from './products/product-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Shoes App</h1>
   
        <ProductContainer/>


      </div>
    );
  }
}
