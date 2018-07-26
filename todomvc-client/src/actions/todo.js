export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
export const fetchToDoRequest = () => ({
    type: FETCH_TODO_REQUEST
});
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const fetchToDoSuccess = data => ({
    type : FETCH_TODO_SUCCESS,
    data
});
export const FETCH_TODO_ERROR = "FETCH_TODO_ERROR";
export const fetchToDoError = error => ({
    type: FETCH_TODO_ERROR,
    error
});
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const addToDoSuccess = data => ({
    type: ADD_TODO_SUCCESS,
    data
});
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";
export const addToDoError = error => ({
    type: ADD_TODO_ERROR,
    error
});
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const deleteToDoSuccess = data =>({
    type: DELETE_TODO_SUCCESS,
    data
});
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";
export const deleteToDoFailure = error => ({
    type: DELETE_TODO_FAILURE,
    error
});
export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const deleteToDoRequest = () => ({
    type: DELETE_TODO_REQUEST
});
export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const updateToDoRequest = () => ({
    type: UPDATE_TODO_REQUEST
});
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const updateToDoSuccess = (data, toDoCompletion) => ({
    type: UPDATE_TODO_SUCCESS,
    data,
    toDoCompletion
});
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE";
export const updateToDoFailure = error => ({
    type: UPDATE_TODO_FAILURE,
    error
});

// get endpoint for getting all todos
export const fetchToDos = () => (dispatch) => {
    dispatch(fetchToDoRequest());
    return fetch('https://ancient-waters-49479.herokuapp.com/todo/',  {
        method: 'GET'
    })
    .then(res => res.json())
    .then (data => dispatch(fetchToDoSuccess(data)))
    .catch(err => {
        dispatch(fetchToDoError(err));
    });
};

export const addToDo = (toDoDetail) => dispatch =>{
    console.log(toDoDetail);
    return fetch('https://ancient-waters-49479.herokuapp.com/todo/add/todo', {
        method: 'POST',
        body: JSON.stringify(toDoDetail),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => dispatch(addToDoSuccess(data)))
    .catch(err => dispatch(addToDoError(err)))
}
export const deleteToDo = (id) => dispatch => {
    dispatch(deleteToDoRequest());
    return fetch('https://ancient-waters-49479.herokuapp.com/todo/delete/todo/' + id,{
        method: 'DELETE',
    })
    .then(dispatch(deleteToDoSuccess(id)))
    .catch(err => dispatch(deleteToDoFailure(err)))
}
export const updateToDo = (toDoID, toDoCompletion) => dispatch => {
    dispatch(updateToDoRequest());
    return fetch('https://ancient-waters-49479.herokuapp.com/todo/edit/todo/' + toDoID, {
        method: 'PUT',
        body: JSON.stringify({"toDoCompletion": toDoCompletion }),
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(dispatch(updateToDoSuccess(toDoID, toDoCompletion)))
    .catch(err => dispatch(updateToDoFailure(err)))
}