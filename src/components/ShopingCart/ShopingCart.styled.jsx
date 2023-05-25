import styled from "styled-components";

export const Conteiner = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: flex-start;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
`;

export const OrderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;

  height: 560px;
  overflow: auto;
`;

export const GoodItem = styled.li`
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
  display: flex;
`;

export const SubmitButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 12px;
  margin-left: auto;
  background-color: #368639;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #45a049;
  }
`;

export const Image = styled.img`
  width: 330px;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
`;

export const GoodName = styled.p`
  font-size: 28px;
  margin-top: 12px;
  margin-right: auto;
`;

export const Cofidern = styled.div`
  display: flex;
  align-items: baseline;

  margin-left: auto;
  gap: 30px;
`;
