import axios from "axios";

axios.defaults.baseURL = "https://delivery-app-vnwc.onrender.com/api/";

export async function getGoods(category) {
  try {
    const response = await axios.get(`/${category}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
