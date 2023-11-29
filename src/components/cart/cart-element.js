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
      <div className='cart-element' key={product.products_id}>
        <div className='img'>
        <img src={product.products_url} alt="product-card" />
          
        </div>
        <div className='name'>
        <h3 className='name'>{product.products_name}</h3>
          
        </div>
        <div className='counter'>
        <CartItemCounter product={product} />
          
        </div>
        
        <div className='price'>
        <h4>{product.products_price * product.products_quanty}€</h4>
          
        </div>
        
        <div className='trash'>
          <h3 className='cart-button-delete' onClick={() => deleteProduct(product.products_id)}>
          <span className="material-symbols-outlined">
            delete
          </span>
        </h3>
        </div>
        
      </div>
    );
  });
};
export default CartElements;
