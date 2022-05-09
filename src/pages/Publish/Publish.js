import "./Publish.scss";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [exchange, setExchange] = useState(false);

  return (
    <body>
      <form
        className="container"
        ////--
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData();
          formData.append("files", file);
          formData.append("product_name", title);
          formData.append("product_description", description);

          try {
            const response = await axios.post(
              "http://localhost:4000/publish",
              formData,
              {
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log(response);
            alert(JSON.stringify(response.data));
          } catch (err) {
            if (err.response.status === 500) {
              console.error("An error occurred");
            } else {
              console.error(err.response.data.msg);
            }
          }
        }}
        ////--
      >
        <h1>Sell your article</h1>
        <section className="product-photos">
          <label id="upload-button" class="custom-file-upload">
            <input
              id="file-upload"
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
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
                name="product_name"
                id="product_name"
                placeholder="ex: Green funky shirt"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
              ></input>
            </div>
            <div>
              <input
                type="text"
                name="product_description"
                id="product_description"
                placeholder="ex: only worn couple times, great for party, very shiny"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
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
                name="article-brand"
                id="article-brand"
                placeholder="ex: Volcom"
                onChange={(event) => setBrand(event.target.value)}
                value={brand}
              ></input>
            </div>
            <div>
              <input
                type="text"
                name="article-size"
                id="article-size"
                placeholder="ex: XL"
                onChange={(event) => setSize(event.target.value)}
                value={size}
              ></input>
            </div>
            <div>
              <input
                type="text"
                name="article-color"
                id="article-color"
                placeholder="ex: purple"
                onChange={(event) => setColor(event.target.value)}
                value={color}
              ></input>
            </div>
            <div>
              <input
                type="text"
                name="article-condition"
                id="article-condition"
                placeholder="ex: Worn only twice"
                onChange={(event) => setCondition(event.target.value)}
                value={condition}
              ></input>
            </div>
            <div>
              <input
                type="text"
                name="article-city"
                id="article-city"
                placeholder="ex: Berlin"
                onChange={(event) => setCity(event.target.value)}
                value={city}
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
                type="text"
                name="product_price"
                id="product_price"
                placeholder="0.00 €"
                onChange={(event) => setPrice(event.target.value)}
                value={price}
              ></input>
            </div>
            <div>
              <input
                type="checkbox"
                name="exchange"
                id="exchange"
                onChange={(event) => setExchange(event.target.checked)}
                value={exchange}
              ></input>
              <span>Interested in exchange ?</span>
            </div>
          </div>
        </section>
        <section className="add-product">
          <input type="submit" value="Add picture" />
        </section>
      </form>
    </body>
  );
};

export default Publish;
