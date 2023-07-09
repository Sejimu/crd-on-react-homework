import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductForm() {
  const [cards, setCards] = useState([]);
  const navigate2 = useNavigate();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function addBlog(title, body) {
    const { data } = await axios.post("http://localhost:8000/products", {
      title,
      desc,
      price,
      image,
    });
    setCards(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addBlog();
    navigate2("/");
  }

  const navigate = useNavigate();
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-warning">save</button>
      </div>
      <div>
        <button className="btn btn-warning" onClick={() => navigate("/")}>
          back
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
