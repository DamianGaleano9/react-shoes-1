import React from 'react'

import { useContext } from 'react'
import { dataContext } from '../Context/data-context'



const TotalItems = () => {

  const { cart } = useContext(dataContext);

  const itemsQuanty = cart.reduce((acc, el) => acc + el.products_quanty, 0);
  return (
    <div className='total-number'>
      <span className="button-total">
        {itemsQuanty}
      </span>
    </div>
  )
}

export default TotalItems
