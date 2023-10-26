import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavigationBar extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <div className='nav-wrapper'>


                <div className='left-side'>
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home

                    </NavLink>

                    <NavLink to="/about" activeClassName="nav-link-active">
                        About us
                    </NavLink>

                    <NavLink to="/products" activeClassName="nav-link-active">
                        Products
                    </NavLink>

                    <NavLink to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>

                <div className='right-side'>
                    <NavLink to="/blog" activeClassName="nav-link-active">
                        blog
                    </NavLink>

                    <NavLink to="/login" activeClassName="nav-link-active">
                        login
                    </NavLink>

                    <NavLink to="/cart" activeClassName="nav-link-active">
                        Cart
                    </NavLink>
                </div>





                {false ? <button>Add Product</button> : null}
            </div>
        )
    }
}