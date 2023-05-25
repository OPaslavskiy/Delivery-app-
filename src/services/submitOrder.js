import { putOrder } from "../services/";
import Notiflix from "notiflix";

Notiflix.Notify.init({
  width: "380px",
  position: "center-top",
});

export const submitOrder = (
  order,
  contactInfo,
  setOrder,
  setContactInfo,
  totalPrice
) => {
  const arreyKeys = [];
  for (const key in contactInfo) {
    arreyKeys.push(contactInfo[key]);
  }

  if (arreyKeys.some((value) => value === "")) {
    Notiflix.Notify.warning("Please fill in the empty fields.");
  } else {
    const orderForm = {
      ...contactInfo,
      order: order.map(({ _id, image, ...rest }) => rest),
      totalPrice,
    };
    setOrder([]);
    setContactInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    putOrder(orderForm);
    localStorage.removeItem("basket");
  }
};
