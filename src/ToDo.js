import React, { Component } from "react";
import "./ToDo.css";
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleRemove() {
    this.props.removeTask(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing, task: this.props.task });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSave(evt) {
    evt.preventDefault();
    let task = { id: this.props.id, task: this.state.task };
    this.props.updateTask(this.props.id, task);
    this.toggleForm();
  }

  handleComplete() {
    console.log("In handle Complete");
    this.props.completeTask(this.props.id);
  }

  render() {
    let task = (
      <div>
        <li onClick={this.handleComplete} className={this.props.completed ? "completed" : ""}>
          {this.props.task}
        </li>
        <button onClick={this.toggleForm}>Edit</button>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
    let taskForm = (
      <div>
        <form>
          <input name="task" id="task" value={this.state.task} onChange={this.handleChange}></input>
          <button onClick={this.handleSave}>Save</button>
          <button onClick={this.toggleForm}>Cancel</button>
        </form>
      </div>
    );
    return <div>{this.state.isEditing ? taskForm : task}</div>;
  }
}

export default ToDo;
