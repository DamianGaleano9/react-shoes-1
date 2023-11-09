import React from 'react'
import { Fragment } from 'react'




const CartItemCounter = ({quanty}) => {
    return (
        <Fragment>
            <p className='counter-button'>-</p>
                <p>{quanty}1</p>
            <p className='counter-button'>+</p>
        </Fragment>
    )
}

export default CartItemCounter
