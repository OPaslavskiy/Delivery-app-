import React from "react";
import { Input } from "../Input/Input";

export const ContactInfo = ({ contactInfo, setContactInfo }) => {
  const handleChange = ({ target: { name, value } }) => {
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {Object.keys(contactInfo).map((item) => (
        <Input
          key={item}
          item={item}
          handleChange={handleChange}
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
        />
      ))}
    </>
  );
};