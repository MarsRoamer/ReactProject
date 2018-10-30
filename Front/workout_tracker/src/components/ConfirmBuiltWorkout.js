import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ConfirmBuiltWorkout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.confirmWorkout(this.state);
    this.setState({});
    this.props.history.push("/displayworkout");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      userId: this.props.userId
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.props.userWorkout.map(exercise => {
            return [
              <h2>{exercise.name}</h2>,
              <label>Working Sets:</label>,
              <input
                name={exercise.id}
                type="text"
                onChange={this.handleChange}
              />
            ];
          })}
          <br />
          <input type="submit" value="Start Workout!" />
        </form>
      </div>
    );
  }
}

export default withRouter(ConfirmBuiltWorkout);
