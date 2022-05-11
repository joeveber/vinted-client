import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./CheckoutForm.scss";

export default function CheckoutForm({ title, price, picture }) {
  const stripe = useStripe();
  const elements = useElements();

  // --- Add confrmation message
  const handlePayment = async (event) => {
    event.preventDefault();
    // Etape 1 : envoi du numéro de carte à stripe
    //Récupérer les données de cb
    const cardElements = elements.getElement(CardElement);
    console.log(cardElements);
    //Etape 2 Envoyer ces données à l'api de stripe
    const stripeResponse = await stripe.createToken(cardElements);
    console.log(stripeResponse);

    //Etape 3: envoie du token à mon serveur
    const response = await axios.post(
      "https://my-lovely-vinted.herokuapp.com/payment",
      {
        stripeToken: stripeResponse.token.id,
        //-add price and title here
      }
    );
    console.log(response.data);
    if (response.data.status === "succeeded") {
      console.log("Payment succeeded !!");
    }
  };

  return (
    <div id="payment-window">
      <form onSubmit={handlePayment}>
        <h1>{title}</h1>
        <p>{price} €</p>
        <img src={picture} alt="articlePicture" />
        <div id="card-elements">
          <CardElement />
        </div>
        <input
          id="payment-button"
          type="submit"
          value="Give me all your money"
        />
      </form>
    </div>
  );
}
