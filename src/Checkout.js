import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <>
      <div class="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/October/GiftGuides/2021_Holiday_events_herobanner_short_desktop_1500x150_GiftHub_v1_EN.png"
            alt=""
            className="checkout__ad"
          />
          <div>
            <h2 className="checkout__title">Items in your cart</h2>
            {/* <CartItem></CartItem> */}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </>
  );
}

export default Checkout;
