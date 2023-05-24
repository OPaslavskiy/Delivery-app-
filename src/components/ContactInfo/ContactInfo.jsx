import React from "react";
import { Input } from "../Input/Input";
// import { Header, LogoLink } from "./AppBar.styled";

export const ContactInfo = ({ contactInfo, setContactInfo }) => {
  const handleChange = ({ target: { name, value } }) => {
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form>
        {Object.keys(contactInfo).map((item) => (
          <Input
            key={item}
            item={item}
            handleChange={handleChange}
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
          />
        ))}
      </form>
    </>
  );
};
