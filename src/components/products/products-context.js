import React from "react";

import { useContext } from "react";
import { dataContext } from "../Context/data-context";


const Products = (product) => {
    const { data, cart, setCart } = useContext(dataContext);

    const buyProducts = (product) => {
        console.log('me compraste');
        setCart([...cart, product]);
    
    }

    return data.map((product) => {
        return (
            <div className="product-items-wrapper" key={product.products_id}>
                <img src={product.products_url} alt="img" />
                <h3>{product.products_name}</h3>
                <h4>{product.products_price}</h4>
                <button onClick={() => buyProducts(product)}>Buy</button>
            </div>
        )
    })
}

export default Products;