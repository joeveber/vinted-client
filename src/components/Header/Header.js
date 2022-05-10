import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from "/Users/joeveber/LeReacteur/4-React/vinted-client/src/assets/logo-vinted.jpeg";

const Header = ({ setHide1, setHide2, token, setUser }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="part-1">
        <Link to="/">
          <img className="logo pointer" src={logo} alt="logo-vinted" />
        </Link>
      </div>

      <div className="part-2">
        <p>Search bar and filter</p>
      </div>
      <div className="part-3">
        {token === null ? (
          <div>
            <button
              className="header-button pointer"
              onClick={() => {
                setHide1(false);
              }}
            >
              Sign up
            </button>
            <button
              className="header-button pointer"
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
            className="header-button-variation pointer"
            onClick={() => {
              setUser(null);
            }}
          >
            Sign out
          </button>
        )}
      </div>
      <div className="part-4">
        {/* <Link to="/publish"> */}
        <button
          className="header-button-variation pointer"
          onClick={() => {
            token ? navigate("/publish") : alert("Please sign in first");
            token ? navigate("/publish") : setHide2(false);
          }}
        >
          Sell your articles
        </button>
        {/* </Link> */}
      </div>
    </header>
  );
};

export default Header;
