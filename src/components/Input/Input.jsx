import React from "react";

export const Input = ({ item, handleChange, contactInfo }) => (
  <>
    <label htmlFor={item}>{item}</label>
    <input
      type={item === "email" ? "email" : "text"}
      id={item}
      name={item}
      value={contactInfo[item]}
      onChange={handleChange}
      required
    />
  </>
);
