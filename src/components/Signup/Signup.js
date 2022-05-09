import "./Signup.scss";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";

const Signup = ({ hide1, setHide1 }) => {
  const [username, setUsername] = useState("joey");
  const [email, setEmail] = useState("joey@lereacteur.io");
  const [password, setPassword] = useState("azerty");
  const [newsletter, setNewsletter] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (event) => {
    try {
      event.preventDefault();
      // Error message reset at each attempt
      setErrorMessage("");
      // Request sent to server to create a new user axios.post("url",body)
      const response = await axios.post("http://localhost:4000/user/signup", {
        email: email,
        username: username,
        password: password,
        newsletter: newsletter,
      });
      console.log(response.data);

      if (response.data) {
        console.log("Compte bien créé");
        // setToken(response.data.token);
        // Cookies.set("token", response.data.token);
        alert("New user saved");
        setHide1(true);
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
      console.log(error.response.status);
    }
  };

  return (
    <div className={hide1 === true ? "hidden" : undefined}>
      <div className="modal">
        <div className="form-container">
          <button
            id="closemodal"
            onClick={() => {
              setHide1(true);
            }}
          >
            X
          </button>
          <p>Sign up</p>
          <h4 className="modalmsg hidden">Le message a bien été envoyé</h4>
          <form id="contactForm1" onSubmit={handleSignup}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            ></input>
            <input
              type="text"
              name="email1"
              id="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <input
              type="password"
              name="password1"
              id="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <div className="newsletter">
              <input
                type="Checkbox"
                name="newsletter"
                id="newsletter"
                placeholder="Newsletter"
                onChange={(event) => setNewsletter(event.target.checked)}
              ></input>
              <p>Newsletter</p>
            </div>

            <input type="submit" value="Sign in"></input>
            <p>{errorMessage}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
