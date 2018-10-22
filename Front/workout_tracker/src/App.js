import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import * as actions from "./actions";
import { connect } from "react-redux";
import BuildWorkout from "./components/BuildWorkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
  };

  render() {
    const loggedIn = () => {
      if (this.props.userId === "") {
        return <Login />;
      }
    };
    // return (
    //   <div>
    //     {/* <Navbar /> */}
    //     {/* <Login /> */}
    //     <h1>Main Page</h1>

    //     <BuildWorkout />
    //   </div>
    // );
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <button onClick={this.handleClick}>Test API call</button>
          {loggedIn()}
          <Route exact path="/login" component={Login} />
          <BuildWorkout />
          <button onClick={e => this.handleClick(e)}>LogOut</button>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.session.userId
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
