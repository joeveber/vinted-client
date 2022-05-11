import "./Signin.scss";
import axios from "axios";
import { useState } from "react";

const Signin = ({ hide2, setHide1, setHide2, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://my-lovely-vinted.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);

      if (response.data.token) {
        console.log("User logged in");
        setUser(response.data.token);
        alert("You are logged in");
        setHide2(true);
      }
    } catch (error) {}
  };

  return (
    <div className={hide2 === true ? "hidden" : undefined}>
      <div className="modal">
        <div className="form-container">
          <button
            id="closemodal"
            onClick={() => {
              setHide2(true);
            }}
          >
            X
          </button>
          <p>Sign in</p>
          <h4 className="modalmsg hidden">Le message a bien été envoyé</h4>
          <form id="contactForm2" onSubmit={handleSignin}>
            <input
              type="text"
              name="email"
              id="email2"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <input
              type="password"
              name="password"
              id="password2"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            <input type="submit" value="Sign in"></input>
          </form>
          <button
            onClick={() => {
              setHide2(true);
              setHide1(false);
            }}
          >
            No account yet? Click here to sign up.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
