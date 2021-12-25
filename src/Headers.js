import React from "react";
import "./Headers.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Headers() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">Hello</span>
          <span className="header__optionTwo">Sign in </span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">& orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <div className="header__shoppingCart">
          <div className="header__optionTwo header__basketCount">0</div>
          <ShoppingCartIcon />
        </div>
      </div>
    </div>
  );
}

export default Headers;
