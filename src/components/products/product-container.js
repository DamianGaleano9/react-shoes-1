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
            data: []
        }

        this.handleFilter = this.handleFilter.bind(this);

    }



    getProductsItems() {
        axios.get('http://localhost:4000/api/products')
            .then(response => {
                this.setState({
                    data: response.data[0]
                })
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
        console.log('response', item);
            return ( <ProductItem key={item.products_id} name={item.products_name} url={item.products_description} slug={item.products_id} />
            );
        })
    }


    componentDidMount() {
        this.getProductsItems();
    }

    render() {

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
