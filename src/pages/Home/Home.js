import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.scss";
import banner from "/Users/joeveber/LeReacteur/4-React/vinted-client/src/assets/banner-wide.jpeg";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/offers");
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  return isLoading === true ? (
    <div>Downloading...</div>
  ) : (
    <div className="container">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <h1>Popular items</h1>
      <div className="products">
        {data.offers.map((offer) => {
          return (
            <Link to={`/offer/${offer._id}`} key={offer._id}>
              <div className="card">
                <img
                  className="article-image"
                  src={offer.product_pictures.secure_url}
                  alt=""
                />
                <p>{offer.product_price} €</p>
                <p>{offer.product_name}</p>
                <p>{offer.product_description}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <button onClick={() => setPage(page - 1)}>Page précédente</button>
        <button onClick={() => setPage(page + 1)}>Page suivante</button>
      </div>
    </div>
  );
};

export default Home;
