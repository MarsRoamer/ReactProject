import React, { Component } from "react";

export default class AddNewExercise extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      bodypart: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, description, bodypart } = this.state;
    if (name === "" || description === "" || bodypart === "") {
      alert("Please fill out all 3 fields");
    } else {
      this.props.addNewExercise(this.state);
      this.setState({
        name: "",
        description: "",
        bodypart: ""
      });
    }
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor="">Exercise Name: </label>
        <input type="text" onChange={this.handleChange} name="name" />
        <br />
        <label htmlFor="">Description of Exercise: </label>
        <input type="text" onChange={this.handleChange} name="description" />
        <br />
        {/* <label htmlFor="">Primary target of exercise: </label> */}
        {/* <input type="text" onChange={this.handleChange} name="bodypart" /> */}
        <select
          class="form-control"
          id="sel1"
          onChange={this.handleChange}
          name="bodypart"
        >
          <option>Please Select a primary bodypart</option>
          <option>chest</option>
          <option>shoulders</option>
          <option>biceps</option>
          <option>triceps</option>
          <option>legs</option>
          <option>back</option>
          <option>full body</option>
          <option>misc</option>
        </select>
        <br />

        <input type="submit" onClick={e => this.handleSubmit(e)} />
      </div>
    );
  }
}
