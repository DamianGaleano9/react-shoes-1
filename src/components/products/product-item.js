import React from "react";
import { Link } from "react-router-dom";


export default function (props) {

    const { products_id, products_name, products_price, products_img } = props.item

    return (
        <div>
            

            <div>
                {products_name}

            </div>

            <div>
                {products_price}

            </div>
            <Link to={`/product/${products_id}`}>Link</Link>
        </div>
    );
}