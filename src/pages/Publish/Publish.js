import "./Publish.scss";
import { useState } from "react";
import axios from "axios";
// import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState("Chemise");
  const [description, setDescription] = useState("Très belle chemise");
  const [brand, setBrand] = useState("Nike");
  const [size, setSize] = useState("45");
  const [color, setColor] = useState("Noir");
  const [condition, setCondition] = useState("neuve");
  const [city, setCity] = useState("Paris");
  const [price, setPrice] = useState(45);
  const [exchange, setExchange] = useState(false);

  const userToken =
    "FPhUfbTyRUynbCXuFeF7KHHhzXTDiRGzo60te6CAanDrE2fOjNkvOCBAZsnyKQ4v";

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);

      const response = await axios.post(
        "http://localhost:4000/publish",
        // "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + userToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      if (error.response.status === 500) {
        console.error("An error occurred");
      } else {
        console.error(error.response.data.msg);
      }
    }
  };

  return (
    //Ajouter ternaire token === true ? page : < Navigate to="/login" />
    <div>
      <form
        className="container"
        ////--
        onSubmit={handleSubmit}
        ////--
      >
        <h1>Sell your article</h1>
        <section className="product-photos">
          <label id="upload-button" className="custom-file-upload">
            <input
              id="file-upload"
              type="file"
              onChange={(event) => {
                setPicture(event.target.files[0]);
                /// add image preview
              }}
            />
            Add a picture
          </label>
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
              <input
                type="text"
                value={description}
                placeholder="ex: only worn couple times, great for party, very shiny"
                onChange={(event) => setDescription(event.target.value)}
              ></input>
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
              <span>Interested in exchange ?</span>
            </div>
          </div>
        </section>
        <section className="add-product">
          <input type="submit" value="Add picture" />
        </section>
      </form>
    </div>
  );
};

export default Publish;
