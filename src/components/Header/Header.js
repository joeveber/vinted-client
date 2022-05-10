import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "/Users/joeveber/LeReacteur/4-React/vinted-client/src/assets/logo-vinted.jpeg";

const Header = ({ setHide1, setHide2, token, setUser }) => {
  return (
    <header>
      <div className="part-1">
        <img className="logo" src={logo} alt="logo-vinted" />
      </div>

      <div className="part-2">
        <p>Search bar and filter</p>
      </div>
      <div className="part-3">
        {token === null ? (
          <div>
            <button
              className="header-button"
              onClick={() => {
                setHide1(false);
              }}
            >
              Sign up
            </button>
            <button
              className="header-button"
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
            className="header-button-variation"
            onClick={() => {
              setUser(null);
            }}
          >
            Sign out
          </button>
        )}
      </div>
      <div className="part-4">
        <Link to="/publish">
          <button className="header-button-variation">
            Sell your articles
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
