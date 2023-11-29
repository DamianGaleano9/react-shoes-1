import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
// import { Payments} from "./cart/payment"

import { useContext } from 'react';
import { dataContext } from "./Context/data-context";
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";


const CheckOutForm = ({ }) => {
  const { cart } = useContext(dataContext)
  const total = cart.reduce((acc, el) => acc + el.products_price * el.products_quanty, 0);
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  // const navigate = useNavigate();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Thanks for you order');



    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),

    });
    setLoading(true);


    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post("http://localhost:4000/api/checkout",

          {
            id,
            amount: parseInt(total * 100),


          }
        );
        console.log(data);

        elements.getElement(CardElement).clear();
        setLoading(false)
        history.push("/success-payment");

      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(error);
      setLoading(false)
    }
  }
  console.log(!stripe || loading);


  return (

    <form onSubmit={handleSubmit} className="card-container">
      <CardElement className="card" />
      <h3>{total}</h3>


      {/* <stripe-buy-button */}
        {/* buy-button-id="buy_btn_1OCgGIJ5RKKP5n8TEsVPFSNa" */}
        {/* publishable-key="pk_test_51OAppxJ5RKKP5n8T5E24yShSaFPs0JO1SvcjuiJc4euHq0RByO8oxmQz8QJQ6YWgxeBIiMI441Ipb2VYaYMcaeJ100ESvq0LiJ" */}
      {/* > */}
        <button disabled={!stripe} className="bounce-top">
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "PAY"
          )}
        </button>



      {/* </stripe-buy-button> */}
    </form>
  );
}

export default CheckOutForm;
