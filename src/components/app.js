import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from './navigation/navigation-bar';


import Home from "./pages/home";
import Products from './pages/products-page';
import Cart from './pages/cart';
import Login from './pages/login';
import Contact from './pages/contact';
import Blog from './pages/blog';
import About from './pages/about';
import ProductDetail from './products/product-detail';
import NoMatch from './pages/no-match';


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
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/Blog" component={Blog} />
              <Route exact path="/product/:slug" component={ProductDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>

        </Router>
      </div>
    );
  }
}
