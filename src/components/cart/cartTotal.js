import React from 'react'
import { useContext } from 'react';
import { dataContext } from '../Context/data-context';

const cartTotal = () => {

  const { cart } = useContext(dataContext);


  const total = cart.reduce((acc, el)=> acc + el.products_price, 0);

  return (
    <div>
      
    </div>
  )
}

export default cartTotal
