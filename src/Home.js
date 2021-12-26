import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id={22312}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={11}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
          <Product
            id={98998}
            title="The $100 Startup: Reinvent the Way You Make a Living, Do What You Love, and Create a New Future"
            price={24.5}
            rating={4}
            image="https://m.media-amazon.com/images/I/81-Q4J8iEdL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={65656}
            title="Bose Portable Smart Speaker — Wireless Bluetooth Speaker with Alexa Voice Control Built-In,"
            price={339}
            rating={5}
            image="https://m.media-amazon.com/images/I/616zERCeOhL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            id={7457574}
            title="Echo Show 8 (1st Gen, 2019 release) -- HD smart display with Alexa"
            price={111}
            rating={4}
            image="https://m.media-amazon.com/images/I/51tDwmmaSKL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            id={989786}
            title="Baby Monitor, WINEES 1080P Indoor Camera with Audio and Night Vision"
            price={45.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61qAAEKE9eL._AC_UL640_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV"
            price={311}
            rating={3}
            image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
