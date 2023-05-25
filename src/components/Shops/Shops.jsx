import React, { useState } from "react";
import { getGoods, addToBasket } from "../../services";
import ButtonList from "../ButtonList/ButtonList";

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
        <ButtonList loadGoods={loadGoods} />
      </div>
      <div>
        {goods?.map((good) => (
          <div key={good._id}>
            <p>{good.titel}</p>
            <img src={good.image} alt="" width={150} height={80} />
            <button type="button" onClick={() => addToBasket(good)}>
              add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shops;
