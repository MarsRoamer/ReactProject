import React, { Component } from "react";

export default class Lift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseId: props.lift.id,
      userId: this.props.userId
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let exercise = this.state;
    let data = dataCleanse(exercise);
    debugger;
  };

  render() {
    return (
      <div className="">
        <h3>{this.props.lift.name}</h3>
        <form action="">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Set</th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
                <th scope="col">4</th>
                <th scope="col">5</th>
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Reps</th>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps1"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps2"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps3"
                  />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <th scope="row">Weight</th>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight1"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight2"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight3"
                  />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

const dataCleanse = dataset => {
  let arr = [];
  let arr1 = [];
  let arrW = [];

  for (const key in dataset) {
    if (key[0] === "R") {
      let obj = {};
      obj[`${key}`] = parseInt(dataset[key]);
      arr.push(obj);
    } else if (key[0] === "W") {
      let obj = {};
      obj[`${key}`] = parseInt(dataset[key]);
      arr1.push(obj);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    obj[Object.values(arr[i])] = Object.values(arr1[i])[0];
    arrW.push(obj);
  }

  return arrW;
};
