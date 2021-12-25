import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div class="subtotal">
      <div className="subtotal__container">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal (0 items): <strong>0</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains gift
              </small>
            </>
          )}
          decimalScale={2}
          displayType="text"
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
