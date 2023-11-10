import React, { useContext } from "react";
import { dataContext } from "../Context/data-context";

const Products = () => {
    const { data, buyProducts } = useContext(dataContext);

    return (
        <div className="products-container">
            {data.map((product) => (
                <div className="products" key={product.products_id}>
                    <img className="product" src={product.products_url} alt="img" />
                    <h3 className="card-title">{product.products_name}</h3>
                    <h4>{product.products_price} €</h4>
                    <button className="card-title" onClick={() => buyProducts(product)}>
                        Buy
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
