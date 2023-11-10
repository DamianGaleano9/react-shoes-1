import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/data-context";

import CartItemCounter from './cart-item-counter';

const CartElements = () => {

  const { cart, setCart } = useContext(dataContext);


  const deleteProduct = (products_id) => {
    const foundId = cart.find((element) => element.products_id === products_id);


    const newCart = cart.filter((element) => {

      return element !== foundId;
    });


    setCart(newCart);

  };


  return cart.map((product) => {
    return (
      <div className='cart-container' key={product.products_id}>
        <img src={product.products_url} alt="product-card" />

        <h3 className='name'>{product.products_name}</h3>
        <CartItemCounter product={product} />
        <h4 className='price'>{product.products_price * product.products_quanty}€</h4>
        <h3 className='cart-button-delete' onClick={() => deleteProduct(product.products_id)}>
          <span className="material-symbols-outlined">
            delete
          </span>
        </h3>
      </div>
    );
  });
};
export default CartElements;
