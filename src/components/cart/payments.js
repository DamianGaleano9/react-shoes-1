import React from "react";
import { useHistory } from "react-router-dom";

const PaymentSuccess = () => {

    const history = useHistory();

    const redirectToHome = () => {
        history.push("/")
    }
    return (
        <div className="payment-wrapper">
            <div className="payment">
                <h2>PAYMENTS SUCCESS!</h2>
                <button className="back" onClick={redirectToHome}>HOME</button>
            </div>

        </div>
    );
};

export default PaymentSuccess;
