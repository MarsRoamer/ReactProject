import React, { Component } from "react";
import Lift from "./Lift";
import { withRouter } from "react-router-dom";

class DisplayWorkout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  hasBuiltWorkout = () => {
    if (this.props.workout.length === 0) {
      this.props.history.push("/buildworkout");
    }
  };

  render() {
    return (
      <div>
        {this.hasBuiltWorkout()}
        <h1>Display workout here!</h1>
        {this.props.workout.map(lift => {
          return (
            <Lift
              lift={lift}
              userId={this.props.userId}
              saveWorkout={this.props.saveWorkout}
              liftHistory={this.props.liftHistory}
              getLiftHistory={this.props.getLiftHistory}
            />
          );
        })}
      </div>
    );
  }
}

export default withRouter(DisplayWorkout);
