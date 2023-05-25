export const handleQuantityChange = (e, goodTitle, order, setOrder) => {
  const { value } = e.target;

  const updatedOrder = order
    .map((item) => {
      if (item.titel === goodTitle) {
        return { ...item, quantity: value };
      } else {
        return { ...item, quantity: 1 };
      }
    })
    .filter((item) => item.quantity !== "0");

  setOrder(updatedOrder);
};
