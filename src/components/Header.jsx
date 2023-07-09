import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "gray",
        margin: "0",
      }}
    >
      <h2
        style={{ margin: "0" }}
        onClick={(e) => {
          navigate("/");
        }}
      >
        Homepage
      </h2>
      <Button
        className="btn btn-primary"
        onClick={(e) => navigate("/add_product")}
      >
        add_product{" "}
      </Button>
    </div>
  );
}

export default Header;
