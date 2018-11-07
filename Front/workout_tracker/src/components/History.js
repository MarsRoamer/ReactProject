import React, { Component } from "react";

export default class History extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Reps</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          <tbody>
            {this.props.liftHistory.map(lift => {
              return [
                <tr>
                  <td>{lift.reps}</td>
                  <td>{lift.weight}</td>
                </tr>
              ];
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
