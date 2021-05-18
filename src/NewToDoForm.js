import React, { Component } from "react";
import uuid from "uuid/v4";

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTask({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            value={this.state.task}
            name="task"
            onChange={this.handleChange}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewToDoForm;
