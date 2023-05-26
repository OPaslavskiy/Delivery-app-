import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  gap: 32px;
  justify-content: flex-start;
  padding-left: 64px;
  padding-right: 64px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
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
  position: relative;

  &:hover,
  &:focus {
    color: #998787;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background-color: transparent;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
  }

  &.active {
    color: #368639;

    &::after {
      background-color: #368639;
      transform: scaleX(1);
    }
  }
`;

export const Line = styled.header`
  width: 2px;
  height: 40px;
  background-color: #998787;
  margin: 0 12px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
