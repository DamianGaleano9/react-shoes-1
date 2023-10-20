import React, { Component } from 'react';
import ProductItem from './product-item';

export default class ProductContainer extends Component {
    constructor() {
        console.log('Render Constructor');
        
        super();
    }


    ProductItems() {
        
        const data = ["aj1dior", "banned", "Shatters", "metallicpurple", "midnightnavy", "neutralgray", "obsidian","shadow", "shattered", "shatteredbackboard", "spiderman", "trophyroom"]
            return data.map(item => {
                return <ProductItem name={item} url={"google.com"}/>
            })
    }

    render() {
        return (
            <div>
                {this.ProductItems()}
                <ProductItem />
            </div>
        )
    }
}