import "./App.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import About from "./pages/About";
import Publish from "./pages/Publish/Publish";

//components
import Signup from "./components/Signup/Signup.js";
import Signin from "./components/Signin/Signin.js";
import Header from "./components/Header/Header.js";

function App() {
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);

  /// Cookie setup
  const [token, setToken] = useState(Cookies.get("myLittleCookie") || null);

  const setUser = (token) => {
    if (token !== null) {
      //Action de connexion
      console.log("Création d'un cookie myLittleCookie");
      Cookies.set("myLittleCookie", token, { expires: 10 });
    } else {
      //action de déconnexion
      console.log("Suppression d'un cookie myLittleCookie");
      Cookies.remove("myLittleCookie");
    }
    setToken(token);
    console.log(`Mise à jour du state Token avec ${token}`);
  };
  /// Cookie setup

  return (
    <Router>
      <Header
        hide1={hide1}
        setHide1={setHide1}
        hide2={hide2}
        setHide2={setHide2}
        token={token}
        setUser={setUser}
      />
      <Signup hide1={hide1} setHide1={setHide1} />
      <Signin hide2={hide2} setHide2={setHide2} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/publish" element={<Publish />} token={token} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
