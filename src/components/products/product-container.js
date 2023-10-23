import React, { Component } from "react";
import ProductItem from "./product-item";
import axios from "axios";



export default class ProductContainer extends Component {
    constructor() {
        console.log('Products is render');
        super();

        this.state = {
            pageName: "Welcome to my eCommerce",
            isLoading: false,
            data: [
                { name: "aj1dior", category: "Air 1", slug: "aj1dior" },
                { name: "banned", category: "Air 1", slug: "banned" },
                { name: "Shatters", category: "Air Force 1", slug: "Shatters" },
                { name: "metallicpurple", category: "Air 1", slug: "metallicpurple" },
                { name: "midnightnavy", category: "Air Force 1", slug: "midnightnavy" },
                { name: "neutralgray", category: "Air 1", slug: "neutralgray" },
                { name: "obsidian", category: "Air 1", slug: "obsidian" },
                { name: "shadow", category: "Air Force 1", slug: "shadow" },
                { name: "shattered", category: "Air 1", slug: "shattered" },
                { name: "shatteredbackboard", category: "Air Force 1", slug: "shatteredbackboard" },
                { name: "spiderman", category: "Air Force 1", slug: "spiderman" },
                { name: "trophyroom", category: "Air 1", slug: "trophyroom" },

            ]
        }

        this.handleFilter = this.handleFilter.bind(this);
        this.getProductsItems = this.getProductsItems.bind(this);

    }



    getProductsItems() {
        axios.get('http://localhost:4000/api/products')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);

            });

    };


    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })
    }

    productsItems() {
        return this.state.data.map(item => {
            return <ProductItem name={item.name} url={"google.com"} slug={item.slug} />
        })
    }




    render() {
        this.getProductsItems();

        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>



                <h2>{this.state.pageName}</h2>


                <button onClick={() => this.handleFilter('Air 1')}>Air 1</button>
                <button onClick={() => this.handleFilter('Air Force 1')}>Air Force 1</button>

                {this.productsItems()}

            </div>
        )
    }
}
