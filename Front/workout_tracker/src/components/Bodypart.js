import React, { Component } from "react";
import index from "../index.css";

export default class Bodypart extends Component {
  handleSubmit = e => {
    let checkedValue = [];
    let inputElements = document.getElementsByClassName("exerciseCheckbox");
    for (let i = 0; i < inputElements.length; i++) {
      if (inputElements[i].checked) {
        checkedValue.push(inputElements[i].value);
      }
    }
    debugger;
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="card-group">
            <div className="col-sm-4">
              <div className="cards">
                <h2>Chest</h2>
                {this.props.chest.map(exercise => (
                  <div className="card">
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          className="exerciseCheckbox"
                          value={exercise.id}
                        />
                        {exercise.name}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-4">
              <h2>Shoulders</h2>
              {this.props.shoulders.map(exercise => (
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      className="exerciseCheckbox"
                      value={exercise.id}
                    />
                    {exercise.name}
                  </label>
                </div>
              ))}
            </div>
            <div className="col-sm-4">
              <h2>Biceps</h2>
              {this.props.biceps.map(exercise => (
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      className="exerciseCheckbox"
                      value={exercise.id}
                    />
                    {exercise.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="card-group">
            <div className="col-sm-4">
              <h2 className="card-title">Ticeps</h2>
              {this.props.triceps.map(exercise => (
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      className="exerciseCheckbox"
                      value={exercise.id}
                    />
                    {exercise.name}
                  </label>
                </div>
              ))}
            </div>
            <div className="col-sm-4">
              <h2>Back</h2>
              {this.props.back.map(exercise => (
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      className="exerciseCheckbox"
                      value={exercise.id}
                    />
                    {exercise.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div id="partSubmit">
            <input type="submit" value="Build Your Workout!" />
          </div>
        </form>
      </div>
    );
  }
}
