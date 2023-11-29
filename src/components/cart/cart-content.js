import { useContext } from "react";
import { dataContext } from "../Context/data-context";
import { loadStripe } from '@stripe/stripe-js';

import { Elements } from "@stripe/react-stripe-js"
const stripePromise = loadStripe("pk_test_51OAppxJ5RKKP5n8T5E24yShSaFPs0JO1SvcjuiJc4euHq0RByO8oxmQz8QJQ6YWgxeBIiMI441Ipb2VYaYMcaeJ100ESvq0LiJ");



import React, { Fragment } from "react"
import CartElements from "./cart-element";
import CartTotal from "./cartTotal";
import CheckOutForm from "../checkout-fomr";

const CartContent = () => {

    const { cart } = useContext(dataContext)
    return cart.length > 0 ? (
        <Fragment>

           
            <CartElements />
            <CartTotal />
            <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements>
        </Fragment>
    ) : (
        <h2 style={{ textAlign: 'center', margin: '100px',  }} >Your Cart is Empty</h2>
    )
};

export default CartContent;