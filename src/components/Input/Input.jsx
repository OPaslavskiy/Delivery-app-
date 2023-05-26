import React from "react";
import TextField from "@mui/material/TextField";

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
