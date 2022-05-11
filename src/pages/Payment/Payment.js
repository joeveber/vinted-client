import "./Payment.scss";
// import { Navigate, useLocation } from "react-router-dom";

//Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//components
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm.js";

// const mySecretPassword = "bastien199431";

export default function Payment({ token }) {
  const stripePromise = loadStripe(
    "pk_test_51KxwaYAZOhQ9jSYgy6BuzO5umfT81lwbxqqfuRavwhWTOuYGRkwxyCEHaUwqxbCsaTsIN58otyKmyAVQK8FC9XHy00G26rlMr5"
  );

  return (
    <div className="Payment">
      <p>CHECKK</p>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
