import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Main Page</h1>
      </div>
    );
  }
}

export default App;
