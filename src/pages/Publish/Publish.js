import "./Publish.scss";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token, setHide2 }) => {
  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [exchange, setExchange] = useState(false);

  const [preview, setPreview] = useState(null);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("exchange", exchange);

      const response = await axios.post(
        "http://localhost:4000/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      console.log(token);
    } catch (error) {
      if (error.response.status === 500) {
        console.error("An error occurred");
      } else {
        console.error(error.response.data.msg);
      }
    }
  };

  return (
    <div className="background">
      <form className="container" onSubmit={handleSubmit}>
        <h1>Sell your article</h1>
        <section className="product-photos">
          <label id="upload-button" className="custom-file-upload">
            <input
              id="file-upload"
              type="file"
              onChange={(event) => {
                setPicture(event.target.files[0]);
                setPreview(URL.createObjectURL(event.target.files[0]));
              }}
            />
            Add a picture
          </label>
          <img src={preview} style={{ width: "200px" }} alt="" />
        </section>
        <section className="product-description">
          <div className="col-1">
            <p>Title</p>
            <p>Describe your article</p>
          </div>
          <div className="col-2">
            <div>
              <input
                type="text"
                value={title}
                placeholder="ex: Green funky shirt"
                onChange={(event) => setTitle(event.target.value)}
              ></input>
            </div>
            <div>
              <textarea
                value={description}
                rows="3"
                placeholder="ex: only worn couple times, great for party, very shiny"
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
          </div>
        </section>
        <section className="product-details">
          <div className="col-1">
            <p>Brand</p>
            <p>Size</p>
            <p>Color</p>
            <p>Condition</p>
            <p>City</p>
          </div>
          <div className="col-2">
            <div>
              <input
                type="text"
                value={brand}
                placeholder="ex: Volcom"
                onChange={(event) => setBrand(event.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="text"
                value={size}
                placeholder="ex: XL"
                onChange={(event) => setSize(event.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="text"
                value={color}
                placeholder="ex: purple"
                onChange={(event) => setColor(event.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="text"
                value={condition}
                placeholder="ex: Worn only twice"
                onChange={(event) => setCondition(event.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="text"
                value={city}
                placeholder="ex: Berlin"
                onChange={(event) => setCity(event.target.value)}
              ></input>
            </div>
          </div>
        </section>
        <section className="product-price">
          <div className="col-1">
            <p>Prix</p>
          </div>
          <div className="col-2">
            <div>
              <input
                type="number"
                value={price}
                placeholder="0.00 €"
                onChange={(event) => setPrice(event.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="checkbox"
                value={exchange}
                onChange={(event) => setExchange(event.target.checked)}
              ></input>
              <span>Interested in an exchange ?</span>
            </div>
          </div>
        </section>
        <section className="add-article">
          <input type="submit" value="Add your article" />
        </section>
      </form>
    </div>
  );
};

export default Publish;
