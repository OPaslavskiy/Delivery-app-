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
      <div>
        {order.length ? (
          <div>
            <ContactInfo
              contactInfo={contactInfo}
              setContactInfo={setContactInfo}
            />
          </div>
        ) : (
          <></>
        )}

        <OrderList>
          {order.length ? (
            order.map((good) => (
              <GoodItem key={good._id}>
                <Image src={good.image} alt="" width={250} height={180} />
                <GoodName>{good.titel}</GoodName>
                <p>Price {good.price} UAH</p>
                <input
                  type="number"
                  min="0"
                  defaultValue="1"
                  id={`quantityOf${good.titel}`}
                  onChange={(e) =>
                    handleQuantityChange(e, good.titel, order, setOrder)
                  }
                />
              </GoodItem>
            ))
          ) : (
            <p>The Cart is empty.</p>
          )}
        </OrderList>
      </div>

      {order.length ? (
        <Cofidern>
          <p>Total: {totalPrice} UAH</p>
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
