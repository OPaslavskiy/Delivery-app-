import React from "react";
import { Input } from "../Input/Input";
import Box from "@mui/material/Box";

export const ContactInfo = ({ contactInfo, setContactInfo }) => {
  const handleChange = ({ target: { name, value } }) => {
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      component="form"
      sx={{
        width: "660px",
        height: "120px",
        gap: "40px",
        mt: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Object.keys(contactInfo).map((item) => (
        <Input
          key={item}
          item={item}
          handleChange={handleChange}
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
        />
      ))}
    </Box>
  );
};
