export const ActionType = {
  SET_USER: "SET_USER",
};
export const Reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default Reducer;
