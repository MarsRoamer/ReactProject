export const addExercise = exercise => {
  return {
    type: "ADD_EXERCISE",
    exercise
  };
};

export const addBuiltWorkout = exercises => {
  return {
    type: "BUILT_WORKOUT",
    exercises
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

export const buildWorkout = exercises => {
  return {
    type: "BUILD_WORKOUT",
    exercises
  };
};

export const clearWorkout = () => {
  return {
    type: "CLEAR_WORKOUT"
  };
};

export const confirmWorkout = workout => {
  // return dispatch => {
  //   return fetch("/user_exercises", {
  //     method: "post",
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //     },
  //     body: JSON.stringify({ workout })
  //   })
  //     .then(response => response.json())
  //     .then(myJson => dispatch(addBuiltWorkout(myJson.arr)));
  // };
};
