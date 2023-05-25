import React from "react";
import { InputP, Label } from "./Input.styled";

export const Input = ({ item, handleChange, contactInfo }) => (
  <>
    <Label htmlFor={item}>{item}</Label>
    <InputP
      type={item === "email" ? "email" : "text"}
      id={item}
      name={item}
      value={contactInfo[item]}
      onChange={handleChange}
      required
    />
  </>
);
