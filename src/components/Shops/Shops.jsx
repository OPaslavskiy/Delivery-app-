import React, { useState, useEffect } from "react";
// import { Link, P, GitLink } from "./Shops.styled";
import { getGoods, addToBasket } from "../../services";

const Shops = () => {
  const [goods, setGoods] = useState([]);

  function loadGoods(operation) {
    switch (operation) {
      case "mcduck":
        getGoods("mcduck").then((res) => {
          setGoods(res);
        });
        break;
      case "theshaurma":
        getGoods("theshaurma").then((res) => {
          setGoods(res);
        });
        break;
      case "elari":
        getGoods("elari").then((res) => {
          setGoods(res);
        });
        break;
      case "faina":
        getGoods("faina").then((res) => {
          setGoods(res);
        });
        break;
      case "sushiabw":
        getGoods("sushiabw").then((res) => {
          setGoods(res);
        });
        break;
      default:
        return;
    }
  }

  return (
    <>
      <div>
        <p>Shops:</p>
        <ul>
          <li>
            <button type="button" onClick={() => loadGoods("mcduck")}>
              Mc' Duck
            </button>
          </li>
          <li>
            <button type="button" onClick={() => loadGoods("theshaurma")}>
              The Shaurma
            </button>
          </li>
          <li>
            <button type="button" onClick={() => loadGoods("elari")}>
              Elari Caffee
            </button>
          </li>
          <li>
            <button type="button" onClick={() => loadGoods("faina")}>
              Faina Pizza
            </button>
          </li>
          <li>
            <button type="button" onClick={() => loadGoods("sushiabw")}>
              Sushi ABW
            </button>
          </li>
        </ul>
      </div>
      <div>
        {goods.map((good) => {
          return (
            <div key={good._id}>
              <p>{good.titel}</p>
              <p>{good.price}</p>
              <button type="button" onClick={() => addToBasket(good)}>
                add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shops;
