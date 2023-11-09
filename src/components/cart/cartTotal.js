import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../Context/data-context';

const CartTotal = () => {

  const { cart } = useContext(dataContext);


  const total = cart.reduce((acc, el)=> acc + el.products_price * el.products_quanty, 0);

  return (
    <div className='cart-total'>
      <h3>Total to pay: {total} $</h3>
    </div>
  )
}

export default CartTotal
