// import React from "react";
// import BodyParts from "../containers/Bodyparts";

// export default () => {
//   const addNew = () => {
//     debugger;
//   };

//   return (

//     <div>
//       <h2>Build Your Workout!</h2>
//       <BodyParts />
//       <button onClick={e => this.addNew(e)}>Add New Exercise</button>
//     </div>
//   );
// };

import React, { Component } from "react";
import BodyParts from "../containers/Bodyparts";
import { Link } from "react-router-dom";

export default class BuildWorkout extends Component {
  addNew = e => {
    this.props.history.push("/addnewexercise");
  };

  render() {
    return (
      <div>
        <h2>Build Your Workout!</h2>
        <BodyParts />
        <button onClick={e => this.addNew(e)}>Add New Exercise</button>
      </div>
    );
  }
}
