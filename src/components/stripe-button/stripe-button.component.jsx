import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripButton = ({ price }) => {
  const priceForStripe = price * 100;
  const Publishablekey =
    "pk_test_51HZzOvKwdmwsPBfXwZcPEWfeh0liuI8PegbPbzTTCHFekKRayjL9xjes5vZX75X2Vx254Bk625LNQkCWSWL4G5BR00mseXC6Tf";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecom Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={Publishablekey}
    />
  );
};
export default StripButton;
