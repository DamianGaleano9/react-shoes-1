import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ProductContainer from './products/product-container';
import NavigationBar from './navigation/navigation-bar';


import Home from "./pages/home";
import Products from './pages/product-page';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} />

            </Switch>
          </div>

        </Router>



        <h1>Shoes App</h1>

        <ProductContainer />


      </div>
    );
  }
}
