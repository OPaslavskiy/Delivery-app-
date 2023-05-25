export function addToBasket(good) {
  const arrayGoods = JSON.parse(localStorage.getItem("basket")) || [];
  const newGoods = good;
  newGoods.quantity = 1;
  console.log("newGoods", newGoods);

  if (arrayGoods.length) {
    const isInBasket = arrayGoods.some((good) => {
      return good._id === newGoods._id;
    });
    if (!isInBasket) {
      arrayGoods.push(newGoods);
    } else console.log("is in basket");
  } else arrayGoods.push(newGoods);

  localStorage.setItem("basket", JSON.stringify(arrayGoods));
}
