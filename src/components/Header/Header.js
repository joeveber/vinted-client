import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "/Users/joeveber/LeReacteur/4-React/vinted-client/src/assets/logo-vinted.jpeg";

const Header = ({ setHide1, setHide2, token, setUser }) => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        {token === null ? (
          <div>
            <button
              onClick={() => {
                setHide1(false);
              }}
            >
              Sign up
            </button>
            <button
              onClick={() => {
                setHide2(false);
              }}
            >
              Sign in
            </button>
          </div>
        ) : (
          <button
            //No more cookie?
            onClick={() => {
              setUser(null);
            }}
          >
            Sign out
          </button>
        )}

        <Link to="/publish">
          <button>Sell your articles</button>
        </Link>
      </div>
      <nav>
        <span>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
