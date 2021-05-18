import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { toDos: [] };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  addTask(item) {
    this.setState((curntState) => ({
      toDos: [...curntState.toDos, item],
    }));
  }

  removeTask(id) {
    this.setState((curntState) => ({
      toDos: curntState.toDos.filter((element) => element.id !== id),
    }));
  }

  updateTask(id, item) {
    this.setState((curntState) => {
      let taskList = curntState.toDos.filter((element) => element.id !== id);
      return {
        toDos: [...taskList, item],
      };
    });
  }

  completeTask(id) {
    console.log("In complete task");
    this.setState((curntState) => {
      let taskList = curntState.toDos.map((element) => {
        if (element.id === id) {
          return { ...element, completed: !element.completed };
        } else {
          return element;
        }
      });
      return { toDos: taskList };
    });
  }

  render() {
    const toDos = this.state.toDos.map((todo) => (
      <ToDo
        completed={todo.completed}
        key={todo.id}
        task={todo.task}
        id={todo.id}
        removeTask={this.removeTask}
        updateTask={this.updateTask}
        completeTask={this.completeTask}
      />
    ));
    return (
      <div className="ToDoList">
        <h1>To do list</h1>
        <NewToDoForm addTask={this.addTask} />
        <ul>{toDos}</ul>
      </div>
    );
  }
}

export default ToDoList;
