import React from "react";
import { withRouter } from "react-router-dom";
import "../../styles/base.css";
import "./todoList.css";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: null
    };
  }
  componentDidMount() {
    this.props.fetchToDos();
  }
  handleDeleteClick(id) {
    this.props.deleteToDo(id);
  }
  handleUpdate(id, completionStatus) {
    let toDoCompletion;
    if (completionStatus === "True") {
      toDoCompletion = "False";
    } else {
      toDoCompletion = "True";
    }
    this.props.updateToDo(id, toDoCompletion);
  }

  render() {
    let taskFinished;
    let toDoArr = [];
    let todoProperties = this.props.todoState.todo.todoData;
    if (todoProperties.length !== 0) {
      for (let i = 0; i < todoProperties.length; i++) {
        if (todoProperties[i].toDoCompletion === "False") {
          taskFinished = (
            <span
              className="checkmark"
              onClick={() =>
                this.handleUpdate(
                  todoProperties[i]._id,
                  todoProperties[i].toDoCompletion
                )
              }
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 161.2 161.2"
                enableBackground="new 0 0 161.2 161.2"
              >
                <path
                  className="path"
                  fill="none"
                  stroke="#797a79"
                  strokeMiterlimit="10"
                  d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
              c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
              c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"
                />
                <circle
                  className="path"
                  fill="none"
                  stroke="#797a79"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                  cx="80.6"
                  cy="80.6"
                  r="62.1"
                />
                <circle
                  className="spin"
                  fill="none"
                  stroke="#797a79"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                  strokeDasharray="12.2175,12.2175"
                  cx="80.6"
                  cy="80.6"
                  r="73.9"
                />
              </svg>
            </span>
          );
        } else {
          taskFinished = (
            <span
              className="checkmark"
              onClick={() =>
                this.handleUpdate(
                  todoProperties[i]._id,
                  todoProperties[i].toDoCompletion
                )
              }
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 161.2 161.2"
                enableBackground="new 0 0 161.2 161.2"
              >
                <path
                  className="path"
                  fill="none"
                  stroke="#5aa375"
                  strokeMiterlimit="10"
                  d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
            c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
            c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"
                />
                <circle
                  className="path"
                  fill="none"
                  stroke="#5aa375"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                  cx="80.6"
                  cy="80.6"
                  r="62.1"
                />
                <polyline
                  className="path"
                  fill="none"
                  stroke="#5aa375"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="113,52.8 
            74.1,108.4 48.2,86.4 "
                />

                <circle
                  className="spin"
                  fill="none"
                  stroke="#5aa375"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                  strokeDasharray="12.2175,12.2175"
                  cx="80.6"
                  cy="80.6"
                  r="73.9"
                />
              </svg>
            </span>
          );
        }
        toDoArr.push(
          <div className="todo-list-item">
            <div className="todo-text" key={i}>
              {" "}
              <span className="completion-status">{taskFinished}</span>{" "}
              {todoProperties[i].toDoName}
              <span>
                <button
                  className="delete-bttn"
                  onClick={() => this.handleDeleteClick(todoProperties[i]._id)}
                >
                  X
                </button>
              </span>
            </div>
          </div>
        );
      }
    }
    let todoInfo;
    if(toDoArr.length >1){
      todoInfo = (<span>todos</span>);
    }else{
      todoInfo=(<span>todo</span>);
    }
if(toDoArr.length === 0){
    return(<div className="empty-container">Oh No! Your list is empty add something!</div>);
}else {
    return (
      <div className="todoList-container">
       <div className="counter">
        You have: {toDoArr.length} {todoInfo}
        </div>
        <div className="grid-container">
          <div className="row">
            <div className="col-6">
              <div className="todo-list-array-container">
                <div className="title-todo">Things ToDo</div>
                {toDoArr}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
  }
}

export default withRouter(ToDoList);
