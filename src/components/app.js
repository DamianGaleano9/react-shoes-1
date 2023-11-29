import React, { Component } from 'react';


import DataProvider from './Context/data-context';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from './navigation/navigation-bar';


import Home from "./pages/home";
// import Products from './pages/products-page';
import Cart from './cart/cart-content';
import Login from './pages/login';
import ProductDetail from './products/product-detail';
import NoMatch from './pages/no-match';
import CheckOutForm from './checkout-fomr';
import PaymentSuccess from './cart/payments';




import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51OAppxJ5RKKP5n8T5E24yShSaFPs0JO1SvcjuiJc4euHq0RByO8oxmQz8QJQ6YWgxeBIiMI441Ipb2VYaYMcaeJ100ESvq0LiJ");



export default class App extends Component {

  render() {
    return (
      <DataProvider>
        <div className='containere'>

          <Router>
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/products" component={Products} /> */}
              <Route path="/cart" component={Cart} />

              <Route path="/checkout">
                <Elements stripe={stripePromise}>
                  <CheckOutForm />

                </Elements>
              </Route>
              <Route path="/success-payment" component={PaymentSuccess} />

              <Route path="/login" component={Login} />
              <Route exact path="/product/:slug" component={ProductDetail} />
              <Route component={NoMatch} />
            </Switch>

          </Router>
        </div>
      </DataProvider>

    );
  }
}
