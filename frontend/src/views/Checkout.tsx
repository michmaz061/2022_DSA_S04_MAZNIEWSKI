import {Typography} from "@mui/material";
import {CardElement, Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import {CheckoutForm} from "../components/checkout-form/CheckoutForm";

export const Checkout = () => {

  return (
    <div className="">
      <Typography variant="h1" gutterBottom>
        Checkout
      </Typography>
      <CheckoutForm/>
    </div>
  )
}