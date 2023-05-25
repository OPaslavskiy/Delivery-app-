import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://delivery-app-server.onrender.com/api";

Notiflix.Notify.init({
  width: "380px",
  position: "center-top",
});

export async function putOrder(orderForm) {
  try {
    const response = await axios.post("order", orderForm);
    Notiflix.Notify.success(
      "Your order has been successfully delivered. An operator will contact you soon."
    );
    return response.data;
  } catch (e) {
    Notiflix.Notify.failure(
      `Oops, an error occurred like this ${e}, please try again!`
    );
  }
}
