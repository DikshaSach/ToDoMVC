import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { required, nonEmpty } from "../../validators";
import Input from "../../input";
import { withRouter } from "react-router-dom";
import './todoForm.css';
export class ToDoForm extends React.Component {
  state = {
    open: false
  };
  onSubmit(values) {
    let toDoName = values.toDoName;
    let toDoCompletion = "False";
    let toDoDetail = { toDoName, toDoCompletion };
    console.log(toDoDetail);
    this.props.addToDo(toDoDetail);
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div className="add-todo-form-container">
        <div className="grid-container">
          <div className="row">
            <div className="col-6">
              <Button
                id="add-todo-form-button"
                variant="fab"
                color="secondary"
                aria-label="add"
                onClick={this.handleClickOpen}
              >
                +
              </Button>
            </div>
          </div>
        </div>
        <Dialog
          className="dialog-box-container"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="sm"
          fullWidth={true}
        >
          <DialogContent className="form-dialog-content">
            <form
              className="todo-form"
              onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
              )}
            >
              {error}
              <label htmlFor="toDoName">Enter Todo Detail</label>
              <Field
                component={Input}
                type="text"
                name="toDoName"
                id="toDoName"
                validate={[required, nonEmpty]}
              />
              <DialogActions className="form-dialog-actions">
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={this.handleClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={this.handleClose}
                  disabled={this.props.pristine || this.props.submitting}
                >
                  Add
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "ToDoForm",
    onSubmitFail: (errors, dispatch) => dispatch(focus("ToDoForm", "title"))
  })(withRouter(ToDoForm))
);
