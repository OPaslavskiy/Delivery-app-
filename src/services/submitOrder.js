import { putOrder } from "../services/putOrder";
export const submitOrder = (order, contactInfo, setOrder, setContactInfo) => {
  const arreyKeys = [];
  for (const key in contactInfo) {
    arreyKeys.push(contactInfo[key]);
  }

  if (arreyKeys.some((value) => value === "")) {
    console.log(`1111111111111111111111`);
  } else {
    const orderForm = {
      ...contactInfo,
      order,
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
