import { Header, LogoLink } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <LogoLink to="/">Shop</LogoLink>
      <LogoLink to="/shopingcart">Shopping Cart</LogoLink>
    </Header>
  );
};
