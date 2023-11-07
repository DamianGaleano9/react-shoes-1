import React from "react";
import { Link } from "react-router-dom";


export default function (props) {

    const { products_id, products_name, products_price, products_url } = props.item

    return (
        <div className="product-item-wrapper">

            <Link to={`/product/${products_id}`}>
                <img src={products_url} alt={products_name} />
            </Link>
            <div className="description">
                <div className="products-name"><strong>{products_name}</strong></div>
                <div className="info-cart">
                    {products_price + "€"}
                </div>
                <div>
                    <button type="submit" className="btn">BUY</button>

                </div>
            </div>



        </div>
    );
}