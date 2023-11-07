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

                    <div className='nav-link-wrapper jordan-logo'>
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            <img src="https://ups3.s3.us-west-2.amazonaws.com/jordan-logo.png" />

                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink to="/about" activeClassName="nav-link-active">
                            About us
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink to="/products" activeClassName="nav-link-active">
                            Products
                        </NavLink>
                    </div>


                    <div className='nav-link-wrapper'>
                        <NavLink to="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>


                </div>

                <div className='right-side'>


                    <div className='nav-link-wrapper'>
                        <NavLink to="/blog" activeClassName="nav-link-active">
                            blog
                        </NavLink>
                    </div>


                    <div className='nav-link-wrapper'>
                        <NavLink to="/login" activeClassName="nav-link-active">
                            login
                        </NavLink>
                    </div>

                    <div className='nav-link-wrapper'>
                        <NavLink to="/cart" activeClassName="nav-link-active">
                            <h1>🛒</h1>
                        </NavLink>
                    </div>


                </div>

            </div>
        )
    }
}