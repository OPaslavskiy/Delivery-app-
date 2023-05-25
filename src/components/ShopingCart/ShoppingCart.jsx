import React, { useState } from "react";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import { handleQuantityChange } from "../../services/";
import { submitOrder } from "../../services";
import {
  Conteiner,
  OrderList,
  SubmitButton,
  Image,
  GoodName,
  GoodItem,
  Cofidern,
  ConteinerContacts,
  SubmitConeiner,
  InputQuantity,
  InfoDiv,
  Price,
  TotalPrice,
  Empty,
} from "./ShopingCart.styled";

const ShopingCart = () => {
  const arrayGoods = JSON.parse(localStorage.getItem("basket")) || [];

  const [order, setOrder] = useState(arrayGoods);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const totalPrice = order.reduce((previousValue, el) => {
    return previousValue + el.quantity * el.price;
  }, 0);

  return (
    <Conteiner>
      <SubmitConeiner>
        {order.length ? (
          <ConteinerContacts>
            <ContactInfo
              contactInfo={contactInfo}
              setContactInfo={setContactInfo}
            />
          </ConteinerContacts>
        ) : (
          <></>
        )}

        <OrderList>
          {order.length ? (
            order.map((good) => (
              <GoodItem key={good._id}>
                <Image src={good.image} alt="" width={250} height={180} />
                <InfoDiv>
                  <GoodName>{good.titel}</GoodName>
                  <Price>Price: {good.price} UAH</Price>
                  <InputQuantity
                    type="number"
                    min="0"
                    defaultValue="1"
                    id={`quantityOf${good.titel}`}
                    onChange={(e) =>
                      handleQuantityChange(e, good.titel, order, setOrder)
                    }
                  />
                </InfoDiv>
              </GoodItem>
            ))
          ) : (
            <Empty>The Cart is empty.</Empty>
          )}
        </OrderList>
      </SubmitConeiner>

      {order.length ? (
        <Cofidern>
          <TotalPrice>Total price: {totalPrice} UAH</TotalPrice>
          <SubmitButton
            onClick={() => {
              submitOrder(
                order,
                contactInfo,
                setOrder,
                setContactInfo,
                totalPrice
              );
            }}
          >
            Submit
          </SubmitButton>
        </Cofidern>
      ) : (
        <></>
      )}
    </Conteiner>
  );
};

export default ShopingCart;
