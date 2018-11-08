import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        {/* <a href="/" className="navbar-brand">
          Workout Tracker
        </a> */}
        <React.Fragment>
          <NavLink className="navbar-brand" to="/buildworkout" exact>
            Workout Tracker
          </NavLink>
        </React.Fragment>
        <ul>
          <li>test</li>
        </ul>
      </div>
    </nav>
  );
};
