import React from 'react'
import { Fragment } from 'react'

import { useContext } from "react";
import { dataContext } from "../Context/data-context";



const CartItemCounter = ({ product }) => {
    const { cart, setCart, buyProducts } = useContext(dataContext);

    const decrease = () => {  
        const productrepeat = cart.find((item) => item.products_id === product.products_id);
        

        productrepeat.products_quanty !== 1 &&
        setCart(cart.map((item) => (item.products_id === product.products_id ? {
            ...product, products_quanty:
                productrepeat.products_quanty - 1 } : item)));
    };

    return (
        <Fragment>
            <p className='counter-button' onClick={decrease}>-</p>
            <p>{product.products_quanty}</p>
            <p className='counter-button' onClick={() => buyProducts(product)}>+</p>
        </Fragment>
    )
}

export default CartItemCounter
