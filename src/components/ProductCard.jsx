import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const API = "http://localhost:8000/products";

function ProductCard() {
  const [cards, setCards] = useState([]);

  async function getCards() {
    const { data } = await axios(API);
    // console.log(data);
    setCards(data);
  }

  async function deleteCards(id) {
    const { data } = await axios(`${API}/${id}`);
    setCards(data);
  }

  useEffect(() => {
    getCards();
    // console.log(cards);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "30px",
      }}
      className="container"
    >
      {cards.map((item) => (
        <div key={item.id} className="card">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>${item.price}</Card.Text>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;

// <div>
//             <h4>{item.title}</h4>
//           </div>
//           <div>
//             <img style={{ width: "70%" }} src={item.image} />
//           </div>
//           <div>
//             <p>${item.price}</p>
//           </div>
//           <div>
//             <button style={{ border: "none" }}>Description</button>
//             <button
//               style={{ backgroundColor: "red", border: "none" }}
//               onClick={(e) => {
//                 deleteCards(item.id);
//               }}
//             >
//               Delete
//             </button>
//           </div>
