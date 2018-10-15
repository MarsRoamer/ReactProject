import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import * as actions from "./actions";
import { connect } from "react-redux";
import BuildWorkout from "./components/BuildWorkout";

import "./App.css";

class App extends Component {
  handleClick = e => {
    fetch("/exercises")
      .then(response => response.json())
      .then(myJson => console.log(myJson));
  };

  componentDidMount() {
    fetch("/exercises")
      .then(response => response.json())
      .then(myJson => {
        this.props.addExercise(myJson);
      });
  }

  render() {
    return (
      <div>
        <Navbar />

        <h1>Main Page</h1>
        <button onClick={this.handleClick}>Test API call</button>
        <BuildWorkout />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
