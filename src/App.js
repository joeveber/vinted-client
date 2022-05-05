import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import About from "./pages/About";
import logo from "./assets/logo-vinted.jpeg";

import "./App.scss";

function App() {
  return (
    <Router>
      <header>
        <img src={logo} alt="logo" />
        <button>S'inscire</button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </header>
      <nav>
        <span>
          <Link to="/">Home--- </Link>
          <Link to="/about">About--- </Link>
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
