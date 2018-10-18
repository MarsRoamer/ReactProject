export const addExercise = exercise => {
  return {
    type: "ADD_EXERCISE",
    exercise
  };
};

export const registerUser = userId => {
  return {
    type: "START_SESSION",
    userId
  };
};
