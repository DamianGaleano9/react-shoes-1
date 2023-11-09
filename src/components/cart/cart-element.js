import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/data-context";

import CartItemCounter from './cart-item-counter';

const CartElements = () => {

  const { cart } = useContext(dataContext);

  return cart.map((product) => {
    return (
      <div className='cart-content' key={product.products_id}>
        <img src={product.products_url} alt="product-card" />

        <h3 className='name'>{product.products_name}</h3>
        <CartItemCounter product={product} />
        <h4 className='price'>{product.products_price * product.products_quanty}$</h4>

      </div>
    );
  });

}

export default CartElements;
