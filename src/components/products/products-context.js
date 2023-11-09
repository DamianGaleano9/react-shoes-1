import React from "react";

import { useContext } from "react";
import { dataContext } from "../Context/data-context";


const Products = (product) => {
    const { data, buyProducts } = useContext(dataContext);


    return data.map((product) => {
        return (
            <div className="container" key={product.products_id}>
                <div className="product-items-wrapper" >
                    <div className="product-item-wrapper">
                        <img className="" src={product.products_url} alt="img" />
                        <h3>{product.products_name}</h3>
                        <h4>{product.products_price}</h4>
                        <button onClick={() => buyProducts(product)}>Buy</button>
                    </div>

                </div>
            </div>

        )
    })
}

export default Products;