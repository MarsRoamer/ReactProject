import React, { Component } from "react";
import Register from "./Register";
import { connect } from "react-redux";
import * as actions from "../actions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    let data = { email: email, password: pass };
    fetch("/sessions", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(myJson => {
        if (myJson.id) {
          this.props.registerUser(myJson.id);
        } else {
          return;
        }
      });
    // .then(myJson => console.log(myJson));
  };

  render() {
    return (
      <div>
        <Register />
        <form action="">
          <input
            type="text"
            name="username"
            id="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            id="pass"
            onChange={this.handleChange}
          />
          <input type="submit" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Login);
