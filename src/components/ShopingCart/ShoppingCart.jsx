import React from "react";
import { Link, P, GitLink } from "./ShoppingCart.styled";

const ShopingCart = () => {
  const arrayGoods = JSON.parse(localStorage.getItem("basket")) || [];
  return (
    <>
      <div></div>
      <div>
        {arrayGoods.length ? (
          arrayGoods.map((good) => (
            <div key={good._id}>
              <p>{good.titel}</p>
              <p>{good.price}</p>
              <input type="number" min="0" defaultValue="1" />
            </div>
          ))
        ) : (
          <p>The Basket is empty.</p>
        )}
      </div>
    </>
  );
};

export default ShopingCart;
