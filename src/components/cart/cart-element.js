import React from 'react'
import { useContext } from "react";
import { dataContext } from "../Context/data-context";



const CartElements = () => {

  const { cart } = useContext(dataContext);

    return cart.map((product) => {
      return (
       <div className='cart-content' key={product.products_id}>
        <img src={product.products_url} alt="product-card"/>
        <h3 className='name'>{product.name}</h3>
        <h4 className='name'>{product.price}</h4>
       </div> 
      );
    });

}

export default CartElements;
