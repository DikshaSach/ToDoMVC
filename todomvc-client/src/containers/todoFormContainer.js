import ToDoForm from "../components/todoForm";
import { connect } from "react-redux";
import { addToDo } from "../actions/todo";


const mapStateToProps = state => {
  return {
    todo: state.todo.todoData
  };
};
const mapDispatchToProps = toDoDetail => dispatch => {
  return {
    addToDo: toDoDetail => {
      dispatch(addToDo(toDoDetail));
    }
  };
};

let ToDoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoForm);
export default ToDoFormContainer;
