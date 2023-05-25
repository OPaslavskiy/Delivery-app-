import React, { useState } from "react";
import { getGoods, addToBasket } from "../../services";
import ButtonList from "../ButtonList/ButtonList";
import {
  Conteiner,
  ShopsItem,
  TitleShops,
  GoodsList,
  GoodItem,
  Image,
  GoodName,
  GoodButton,
} from "./Shops.styled";

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
    <Conteiner>
      <ShopsItem>
        <TitleShops>Shops:</TitleShops>
        <ButtonList loadGoods={loadGoods} />
      </ShopsItem>
      <GoodsList>
        {goods?.map((good) => (
          <GoodItem key={good._id}>
            <Image src={good.image} alt={good.titel} />
            <GoodName>{good.titel}</GoodName>
            <GoodButton type="button" onClick={() => addToBasket(good)}>
              add to Cart
            </GoodButton>
          </GoodItem>
        ))}
      </GoodsList>
    </Conteiner>
  );
};

export default Shops;
