import { useContext } from "react";
import { dataContext } from "../Context/data-context";



import React, { Fragment } from "react"
import CartElements from "./cart-element";
import CartTotal from "./cartTotal";


const CartContent = () => {

    const { cart } = useContext(dataContext)
    return cart.length > 0 ? (
        <Fragment>
            <CartElements />
            <CartTotal />
        </Fragment>
    ): (
        <h2 className="cart-message">Your Cart is Empty</h2>
    )
};

export default CartContent;