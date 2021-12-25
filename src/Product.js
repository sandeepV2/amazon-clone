import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>11</strong>
        </p>
      </div>
      <div className="product__rating">
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        alt=""
        className="product__image"
      />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
