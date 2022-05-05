import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <div>Downloading...</div>
  ) : (
    <div>
      <div>Data Loaded</div>
      <h2>{data.offers[0].product_name}</h2>
      {data.offers.map((offer) => {
        return (
          <Link to={`{}`}>
            <div className="card">
              <h2>{offer.product_name}</h2>
              <img
                style={{ height: 150 }}
                src={offer.product_image.secure_url}
                alt=""
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
