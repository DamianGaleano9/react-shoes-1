import React from "react";

import { useContext } from "react";
import { dataContext } from "../Context/data-context";


const Products = (product) => {
    const { data, cart, setCart } = useContext(dataContext);

    const buyProducts = (product) => {
        // setCart([...cart, product]);
    const productrepeat = cart.find((item) => item.products_id === product.products_id);


    if(productrepeat) {
        setCart(cart.map((item) => (item.id  === product.products_id ? { ...product, products_quanty:
            productrepeat.products_quanty + 1 } : item)));
     } else {
        setCart([...cart, product]);
     }
    }

    return data.map((product) => {
        return (
            <div className="container-wrapper">
                <div className="product-items-wrapper" key={product.products_id}>
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