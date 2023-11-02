import React from "react";
import { Link } from "react-router-dom";


export default function (props) {

    const { products_id, products_name, products_price, products_url } = props.item


    // const imgConverterUrl = products_url ? URL.createObjectURL(new Blob([new Uint8Array(products_url.data)])) : "";

    return (
        <div>
            <div className="product-item-wrapper">
                <img src={products_url} alt={products_name} />
                <div>{products_name}</div>

                <div>{products_price}</div>
                <Link to={`/product/${products_id}`}>Link</Link>
            </div>

        </div>
    );
}