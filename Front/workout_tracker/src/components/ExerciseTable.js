import React, { Component } from "react";

export default class ExerciseTable extends Component {
  handleSubmit = e => {
    debugger;
  };

  handleChange = e => {
    debugger;
  };

  populate = () => {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Set</th>
              <th scope="col">Reps</th>
              <th scope="col">Weight:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <input onChange={this.handleChange} type="text" />
              </td>
              <td>
                <input type="text" onChange={this.handleChange} />
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" />
      </form>
    );
  };

  render() {
    return (
      <div>
        {this.populate()}
        {/* <form onSubmit={e => this.handleSubmit(e)}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Set</th>
                <th scope="col">Reps</th>
                <th scope="col">Weight:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <input onChange={this.handleChange} type="text" />
                </td>
                <td>
                  <input type="text" onChange={this.handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" />
        </form> */}
      </div>
    );
  }
}
