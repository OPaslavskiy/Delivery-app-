import { Outlet } from "react-router-dom";
import React, { useState } from "react";
// import { Header, LogoLink } from "./AppBar.styled";

export const ContactInfo = ({ contactInfo, setContactInfo }) => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //   });

  const handleChange = (event) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form>
        <label htmlFor="name">Ім'я:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={contactInfo.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Електронна пошта:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactInfo.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="phone">Телефон:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={contactInfo.phone}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="address">Адреса:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={contactInfo.address}
          onChange={handleChange}
          required
        />
        <br />
        <br />
      </form>

      {/* <button onClick={handleSubmit}>Надіслати</button> */}
    </>
  );
};
