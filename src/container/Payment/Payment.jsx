import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import AppContext from "../../context/Appcontext";
import "./Payment.css";

const Payment = ({ navigate }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart } = state;

  const paypalOptions = {
    clientId:
      "ARUfDQ--mLNqBTy2jgWli1nCyU7uLkejfB6phNqX0hXtwfHZRaunqpQj2I-OdvEDR4i0hWTr64YwZimD",
    intent: "capture",
    currency: "usd",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect",
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  };

  const handleSumtotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.qty;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumtotal()}
            onPaymentStart={() => console.log("event Payment")}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
