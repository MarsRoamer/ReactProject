import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import * as actions from "./actions";
import { connect } from "react-redux";
import BuildWorkout from "./components/BuildWorkout";
import Login from "./components/Login";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AddNewExercise from "./components/AddNewExercise";
import ConfirmBuiltWorkout from "./components/ConfirmBuiltWorkout";
import DisplayWorkout from "./components/DisplayWorkout";
import TableTest from "./components/TableTest";

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

  handleClick = e => {
    this.props.endSession();
    this.props.clearWorkout();
  };

  render() {
    const loggedIn = () => {
      if (this.props.userId === "") {
        return <Login />;
      }
    };

    return (
      <Router>
        <React.Fragment>
          <Navbar />

          <Switch>
            {/* {loggedIn()} */}
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/addnewexercise"
              render={() => (
                <AddNewExercise addNewExercise={this.props.addNewExercise} />
              )}
            />
            <Route exact path="/buildworkout" render={() => <BuildWorkout />} />
            <Route
              exact
              path="/tabletest"
              render={() => <TableTest workout={this.props.workout} />}
            />
            <Route
              exact
              path="/confirmworkout"
              render={() => (
                <ConfirmBuiltWorkout
                  userWorkout={this.props.workout}
                  userId={this.props.userId}
                  buildWorkout={this.props.buildWorkout}
                />
              )}
            />
            <Route
              exact
              path="/displayworkout"
              render={() => <DisplayWorkout workout={this.props.workout} />}
            />
            <button onClick={e => this.handleClick(e)}>LogOut</button>
            <button onClick={e => this.handleTest(e)}>Test</button>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.session.userId,
    workout: state.workout
    // exercises: state.exercises
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
