import React from "react";
import "./CartItem.css";
import { useStateValue } from "./StateProvider";

function CartItem() {
  const [state, dispatch] = useStateValue();

  const removeItem = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: item.id,
    });
  };
  return (
    <div class="cart_item">
      {state.cart.map((item) => (
        <div className="cart_item__container">
          <img src={item.image} alt="" className="cart_item__image" />
          <div className="cart_item__info">
            <strong className="cart_item__title">{item.title}</strong>
            <div className="cart_item__rating">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
            <strong className="cart_item__price"> $ {item.price}</strong>
            <button onClick={(e) => removeItem(item)}>Remove from cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
