import React, { Component } from "react";
import { BodyPart } from "../components/Bodypart";
import { connect } from "react-redux";
import Bodypart from "../components/Bodypart";

class Bodyparts extends Component {
  render() {
    const { chest, shoulders, biceps, triceps, back } = this.props;
    return (
      <div>
        <Bodypart
          chest={chest}
          shoulders={shoulders}
          biceps={biceps}
          triceps={triceps}
          back={back}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chest: state.exercises.filter(exercise => exercise.bodypart === "chest"),
    shoulders: state.exercises.filter(
      exercise => exercise.bodypart === "shoulders"
    ),
    biceps: state.exercises.filter(exercise => exercise.bodypart === "biceps"),
    triceps: state.exercises.filter(
      exercise => exercise.bodypart === "triceps"
    ),
    back: state.exercises.filter(exercise => exercise.bodypart === "back")
  };
};

export default connect(mapStateToProps)(Bodyparts);
