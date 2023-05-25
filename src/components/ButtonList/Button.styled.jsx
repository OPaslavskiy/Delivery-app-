import styled from "styled-components";

export const Button = styled.button`
  width: 250px;
  height: 120px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #998787;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 2px;

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background-color: #45a049;
  }
`;
