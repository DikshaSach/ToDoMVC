import React, { Component } from "react";
import ToDoContainer from "../../containers/todoContainer";
import ToDoFormContainer from "../../containers/todoFormContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="add-todo-form-title">
          <div className="grid-container">
            <div className="row">
              <div className="col-6">My Todo List</div>
            </div>
          </div>
        </div>
        <ToDoFormContainer />

        <ToDoContainer />
      </div>
    );
  }
}

export default App;
