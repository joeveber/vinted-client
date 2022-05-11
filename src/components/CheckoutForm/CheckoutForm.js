import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutForm() {
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
    const response = await axios.post("http://localhost:4000/payment", {
      stripeToken: stripeResponse.token.id,
      //-add price and title here
    });
    console.log(response.data);
    if (response.data.status === "succeeded") {
      console.log("Payment succeeded !!");
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <h1>Test !</h1>
      <CardElement />
      <input type="submit" />
    </form>
  );
}
