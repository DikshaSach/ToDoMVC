import { connect } from "react-redux";
import ToDoList from "../components/todoList";
import { fetchToDos } from "../actions/todo";
import { deleteToDo } from "../actions/todo";
import { updateToDo } from "../actions/todo";
// this is where it will get action

const mapStateToProps = state => {
  return {
    todoState: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchToDos: () => {
      dispatch(fetchToDos());
    },
    deleteToDo: id => {
      dispatch(deleteToDo(id));
    },
    updateToDo: (id, toDoCompletion) => {
      dispatch(updateToDo(id, toDoCompletion));
    }
  };
};

let ToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
export default ToDoContainer;
