import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavigationBar extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <div>

                <NavLink exact to="/" activeClassName="nav-link-active">
                    Home

                </NavLink>

                <NavLink to="/about-us" activeClassName="nav-link-active">
                    About us
                </NavLink>

                <NavLink to="/products" activeClassName="nav-link-active">
                    Products
                </NavLink>

                <NavLink to="/contact" activeClassName="nav-link-active">
                    Contact
                </NavLink>


                <NavLink to="/blog" activeClassName="nav-link-active">
                    blog
                </NavLink>

                <NavLink to="/login" activeClassName="nav-link-active">
                    login
                </NavLink>

                <NavLink to="/cart" activeClassName="nav-link-active">
                    Cart
                </NavLink>


                {false ? <button>Add Product</button> : null}
            </div>
        )
    }
}