export const workout = (state = [], action) => {
  switch (action.type) {
    case "BUILD_WORKOUT":
      return state.concat(action.exercises);
    case "CLEAR_WORKOUT":
      return [];
    default:
      return state;
  }
};
