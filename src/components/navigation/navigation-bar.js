import React, { Component } from 'react';


export default class NavigationBar extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <div>
                <button>Logo</button>
                <button>Products</button>
                <button>login</button>
                <button>Cart</button>
                {true ? <button>Add Product</button> : null};
            </div>
        )
    }
}