import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement} from "@stripe/react-stripe-js"

const stripePromise = loadStripe("pk_test_51OAppxJ5RKKP5n8T5E24yShSaFPs0JO1SvcjuiJc4euHq0RByO8oxmQz8QJQ6YWgxeBIiMI441Ipb2VYaYMcaeJ100ESvq0LiJ");

function CheckOutForm ()  {
  return (
    <Elements stripe={stripePromise}>

        <form className="checkout-form-container">
          <CardElement/>
        </form>
    </Elements>
  )
}

export default CheckOutForm;
