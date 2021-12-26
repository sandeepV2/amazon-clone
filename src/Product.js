import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, price, rating, image }) {
  const [state, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
