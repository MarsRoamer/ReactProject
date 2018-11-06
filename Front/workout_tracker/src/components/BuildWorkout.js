import React, { Component } from "react";
import BodyParts from "../containers/Bodyparts";
import { withRouter } from "react-router-dom";

class BuildWorkout extends Component {
  addNew = e => {
    this.props.history.push("/addnewexercise");
  };

  render() {
    return (
      <div>
        <h2>Build Your Workout!</h2>
        <BodyParts />
        <button onClick={e => this.addNew(e)}>Add New Exercise</button>
      </div>
    );
  }
}

export default withRouter(BuildWorkout);
