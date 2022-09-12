export const ActionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW:",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};
export const Reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case ActionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };
    case ActionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
    case ActionType.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    default:
      return state;
  }
};

export default Reducer;
