import React, {Component} from "react";
import ProductItem from "./product-item";



export default class ProductContainer extends Component {
    constructor() {
        console.log('Products is render');
        super();

        this.state = {
            pageName: "Welcome to my eCommerce",
            isLoading: false,
            data : [
                {name: "aj1dior", category: "Air 1"},
                {name: "banned", category: "Air 1"},
                {name:  "Shatters", category: "Air Force 1"}, 
                {name: "metallicpurple", category: "Air 1"},
                {name: "midnightnavy", category: "Air Force 1"},
                {name: "neutralgray", category: "Air 1"},
                {name: "obsidian", category: "Air 1"},
                {name: "shadow", category: "Air Force 1"},
                {name: "shattered", category: "Air 1"},
                {name: "shatteredbackboard", category: "Air Force 1"},
                {name: "spiderman", category: "Air Force 1"},
                {name: "trophyroom", category: "Air 1"},

            ]
        }

        this.handleFilter = this.handleFilter.bind(this);

    }
     
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item=> {
                return item.category === filter
            })
        })
    }

    productsItems() {
        return this.state.data.map(item => {
            return <ProductItem name={item.name} url={"google.com"}/>
        })
    }

    


    render () {

        if(this.state.isLoading) {
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
