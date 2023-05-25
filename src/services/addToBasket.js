import Notiflix from "notiflix";

Notiflix.Notify.init({
  width: "380px",
  position: "center-top",
});

export function addToBasket(good) {
  const arrayGoods = JSON.parse(localStorage.getItem("basket")) || [];
  const newGoods = good;
  newGoods.quantity = 1;

  if (arrayGoods.length) {
    const isInBasket = arrayGoods.some((good) => {
      return good._id === newGoods._id;
    });
    if (!isInBasket) {
      arrayGoods.push(newGoods);
      Notiflix.Notify.success(
        "Excellent choice. The item has been added to your cart."
      );
    } else
      Notiflix.Notify.info(
        "This item is already waiting for you in your cart."
      );
  } else arrayGoods.push(newGoods);

  localStorage.setItem("basket", JSON.stringify(arrayGoods));
}
