import React, { useState } from "react";
import { getGoods, addToBasket } from "../../services";
import ButtonList from "../ButtonList/ButtonList";
import { Loader } from "../Loader/Loader";
import {
  Conteiner,
  ShopsItem,
  TitleShops,
  GoodsList,
  GoodItem,
  Image,
  GoodName,
  GoodButton,
  Greeting,
} from "./Shops.styled";

const Shops = () => {
  const [goods, setGoods] = useState([]);
  const [status, setStatus] = useState("stoped");

  function loadGoods(operation) {
    setStatus("pending");
    switch (operation) {
      case "mcduck":
        getGoods("mcduck").then((res) => {
          setStatus("resolved");
          setGoods(res);
        });
        break;
      case "theshaurma":
        getGoods("theshaurma").then((res) => {
          setStatus("resolved");
          setGoods(res);
        });
        break;
      case "elari":
        getGoods("elari").then((res) => {
          setStatus("resolved");
          setGoods(res);
        });
        break;
      case "faina":
        getGoods("faina").then((res) => {
          setStatus("resolved");
          setGoods(res);
        });
        break;
      case "sushiabw":
        getGoods("sushiabw").then((res) => {
          setStatus("resolved");
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
      {status === "pending" ? (
        <Loader />
      ) : (
        <GoodsList>
          {goods.length ? (
            goods?.map((good) => (
              <GoodItem key={good._id}>
                <Image src={good.image} alt={good.titel} />
                <GoodName>{good.titel}</GoodName>
                <GoodButton type="button" onClick={() => addToBasket(good)}>
                  Add to Cart
                </GoodButton>
              </GoodItem>
            ))
          ) : (
            <Greeting>
              Welcome! Choose a store to order delicious food.
            </Greeting>
          )}
        </GoodsList>
      )}
    </Conteiner>
  );
};

export default Shops;
