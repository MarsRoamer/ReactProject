export const exercises = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXERCISE":
      // return [...state, action.exercise];
      return state.concat(action.exercise);
    default:
      return state;
  }
};
