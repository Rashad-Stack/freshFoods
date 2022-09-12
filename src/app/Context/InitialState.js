import { FetchCart, FetchUser } from "../Utilities/LocalStorage";

const userInfo = FetchUser();
const cartInfo = FetchCart();
export const InitialState = {
  user: userInfo,
  cartItems: cartInfo,
  foodItems: null,
  cartShow: false,
};

export default InitialState;
