import React from "react";
import CurrencyFormat from "react-currency-format";
import { getSubTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [state, dispatch] = useStateValue();
  return (
    <div class="subtotal">
      <div className="subtotal__container">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ( {state.cart?.length} items):{" $ "}
                <strong>{getSubTotal(state)}</strong>
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
