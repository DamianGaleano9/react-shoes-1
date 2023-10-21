import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationBar extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <div>

                <NavLink exact to="/">
                    Home

                </NavLink>

                <NavLink to="/products">
                    Products
                </NavLink>
          
                <button>Logo</button>
                <button>Products</button>
                <button>login</button>
                <button>Cart</button>
                {true ? <button>Add Product</button> : null}
            </div>
        )
    }
}