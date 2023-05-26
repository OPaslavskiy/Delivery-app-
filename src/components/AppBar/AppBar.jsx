import { Header, LogoLink, Line } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <LogoLink to="/">Shop</LogoLink>
      <Line></Line>
      <LogoLink to="/shopingcart">Shopping Cart</LogoLink>
    </Header>
  );
};
