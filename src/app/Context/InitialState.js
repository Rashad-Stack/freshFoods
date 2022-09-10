import { FetchUser } from "../Utilities/LocalStorage";

const userInfo = FetchUser();
export const InitialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
};

export default InitialState;
