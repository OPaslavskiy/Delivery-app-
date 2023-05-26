import React from "react";
// import { InputP, Label } from "./Input.styled";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const Input = ({ item, handleChange, contactInfo }) => (
  <>
    <TextField
      extField
      variant="standard"
      label={item}
      type={item === "email" ? "email" : "text"}
      id={item}
      name={item}
      value={contactInfo[item]}
      onChange={handleChange}
      required
    />
  </>
);
