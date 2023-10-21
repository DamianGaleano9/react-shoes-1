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

                <NavLink to="/about-us">
                    About us
                </NavLink>

                <NavLink to="/products">
                    Products
                </NavLink>

                <NavLink to="/contact">
                    Contact
                </NavLink>


                <NavLink to="/blog">
                    blog
                </NavLink>

                <NavLink to="/login">
                    login
                </NavLink>

                <NavLink to="/cart">
                    Cart
                </NavLink>


                {false ? <button>Add Product</button> : null}
            </div>
        )
    }
}