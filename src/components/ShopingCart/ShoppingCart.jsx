import React, { useState, useEffect } from "react";
import { ContactInfo } from "../ContactInfo/ContactInfo";
import { handleQuantityChange } from "../../services/handleQuantityChange";
import { submitOrder } from "../../services/submitOrder";

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
    <form>
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

      <div>
        {order.length ? (
          order.map((good) => (
            <div key={good._id}>
              <img
                src={good.image}
                alt=""
                width={250}
                height={180}
                objectFit={"cover"}
              />
              <p>{good.titel}</p>
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
            </div>
          ))
        ) : (
          <p>The Basket is empty.</p>
        )}
      </div>

      {order.length ? (
        <div>
          <p>Total: {totalPrice} UAH</p>
          <button
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
          </button>
        </div>
      ) : (
        <></>
      )}
    </form>
  );
};

export default ShopingCart;
