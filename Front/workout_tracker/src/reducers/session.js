export const session = (state = defaultState, action) => {
  switch (action.type) {
    case "START_SESSION":
      return { ...state, loggedIn: "True", userId: action.userId };
    default:
      return state;
  }
};

const defaultState = { loggedIn: "False", userId: "" };
