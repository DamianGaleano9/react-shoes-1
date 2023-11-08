import React from "react";

import { useContext } from "react";
import { dataContext } from "../Context/data-context";


const Products = () => {
    const { data } = useContext(dataContext);

    return data.map((product) => {
        return (
            <div className="product-items-wrapper" key={product.products_id}>
                <img src={product.products_url} alt="img-no"/>
                    <h3>{product.products_name}</h3>
                    <h4>{product.products_price}</h4>
                    <button>Buy</button>
            </div>
        )
    })
}

export default Products;