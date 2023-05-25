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
  width: 50%;
`;

export const ConteinerContacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
  width: 50%;
`;

export const SubmitConeiner = styled.div`
  display: flex;
  gap: 28px;
`;

export const GoodItem = styled.li`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #5f4699;
  border-radius: 8px;
  padding: 28px;
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
  width: 430px;
  height: 320px;
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

export const InputQuantity = styled.input`
  width: 160px;
  padding: 5px 10px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-left: 18px;
  gap: 30px;
`;

export const Price = styled.p`
  font-size: 20px;
`;

export const TotalPrice = styled.p`
  font-size: 22px;
`;
