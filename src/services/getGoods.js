import axios from "axios";
import Notiflix from "notiflix";

Notiflix.Notify.init({
  width: "380px",
  position: "center-top",
});

axios.defaults.baseURL = "https://delivery-app-server.onrender.com/api";

export async function getGoods(category) {
  try {
    const response = await axios.get(`/${category}`);
    return response.data;
  } catch (e) {
    Notiflix.Notify.failure(`Oops, something broke. Please try again! ...${e}`);
  }
}
