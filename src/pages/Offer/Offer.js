import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Offer.scss";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my-lovely-vinted.herokuapp.com/offer/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <div>Downloading...</div>
  ) : (
    <div className="container3 background">
      <div className="rightside">
        <img
          className="offer-image"
          src={data.product_pictures.secure_url}
          alt=""
        />
      </div>
      <div className="leftside">
        <h1>{data.product_name}</h1>
        <p className="price">{data.product_price} €</p>

        <div>
          {data.product_details.map((item, index) => {
            const keys = Object.keys(item);
            return (
              <div className="grey" key={index}>
                {keys[0]} : {item[keys[0]]}
              </div>
            );
          })}
        </div>
        <br />
        <hr />
        <br />
        <p className="grey">{data.product_description}</p>
        <p className="grey">{data.product_size}</p>
        <br />
        <br />
        <Link
          to="/Payment"
          state={{
            title: data.product_name,
            price: data.product_price,
            picture: data.product_pictures.secure_url,
          }}
        >
          <button className="buy-button pointer"> Buy</button>
        </Link>
      </div>
    </div>
  );
};

export default Offer;
