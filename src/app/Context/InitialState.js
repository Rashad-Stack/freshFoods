import { FetchUser } from "../Utilities/LocalStorage";

const userInfo = FetchUser();
export const InitialState = {
  user: userInfo,
};

export default InitialState;
