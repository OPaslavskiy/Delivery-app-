import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  padding-left: 64px;
  padding-right: 64px;
  background: linear-gradient(
    114.99deg,
    #c1b9d4 -0.99%,
    #7158ac 54.28%,
    #5f4699 78.99%
  );
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  font-style: normal;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 28px;
  font-weight: bold;
  margin-left: 14px;
  line-height: 1.2;
  padding-top: 15px;
  padding-bottom: 15px;

  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`;
