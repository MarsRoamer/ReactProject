import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

import "./App.css";

class App extends Component {
  handleClick = e => {
    fetch("/exercises")
      .then(response => response.json())
      .then(myJson => console.log(myJson));
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1>Main Page</h1>
        <button onClick={this.handleClick}>Test API call</button>
      </div>
    );
  }
}

export default App;
