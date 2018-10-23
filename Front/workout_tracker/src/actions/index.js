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

export const endSession = () => {
  return {
    type: "END_SESSION"
  };
};

export const addNewExercise = exercise => {
  return dispatch => {
    return fetch("/exercises", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({ exercise })
    })
      .then(response => response.json())
      .then(myJson => dispatch(addExercise(myJson)));
  };
};
