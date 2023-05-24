import React, { useState } from "react";
// import { Link, P, GitLink } from "./ShoppingCart.styled";
import { ContactInfo } from "../ContactInfo/ContactInfo";

const ShopingCart = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const arrayGoods = JSON.parse(localStorage.getItem("basket")) || [];
  return (
    <>
      <div>
        <ContactInfo
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
        />
      </div>
      <div>
        {arrayGoods?.length ? (
          arrayGoods?.map((good) => (
            <div key={good._id}>
              <img
                src={good.image}
                alt=""
                width={250}
                height={180}
                object-fit={"cover"}
              />
              <p>{good.titel}</p>
              <p>Price {good.price} UAH</p>
              <input type="number" min="0" defaultValue="1" />
            </div>
          ))
        ) : (
          <p>The Basket is empty.</p>
        )}
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </>
  );
};

export default ShopingCart;
