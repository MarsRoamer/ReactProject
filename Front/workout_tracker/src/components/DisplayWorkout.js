import React, { Component } from "react";
import Lift from "./Lift";

export default class DisplayWorkout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
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
