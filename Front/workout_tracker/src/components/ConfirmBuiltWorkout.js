import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ConfirmBuiltWorkout extends Component {
  render() {
    return (
      <div>
        <h2>This is will show exercises, ask for sets, and confirm save</h2>
      </div>
    );
  }
}

export default withRouter(ConfirmBuiltWorkout);
