import React from "react";
import { Link, P, GitLink } from "./ShoppingCart.styled";

const ShopingCart = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/tweets">Welcome! Y</Link>
      <P style={{ marginTop: "20px" }}>I am the developer of this website.</P>
      <GitLink href="https://github.com/OPaslavskiy"></GitLink>
      <P>I hope you enjoy using it!</P>
    </div>
  );
};

export default ShopingCart;
