import axios from "axios";

axios.defaults.baseURL = "https://delivery-app-vnwc.onrender.com/api/";

export async function putOrder(orderForm) {
  try {
    const response = await axios.put(`/order`, orderForm);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
