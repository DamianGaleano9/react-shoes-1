import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from "@stripe/react-stripe-js"

const stripePromise = loadStripe(require("pk_test_51OAppxJ5RKKP5n8T5E24yShSaFPs0JO1SvcjuiJc4euHq0RByO8oxmQz8QJQ6YWgxeBIiMI441Ipb2VYaYMcaeJ100ESvq0LiJ"));

function CheckOutForm ()  {
  return (
    <Elements stripe={stripePromise}>
        <form>
          
        </form>
    </Elements>
  )
}

export default payments.form
