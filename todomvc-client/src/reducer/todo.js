import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_ERROR,
    ADD_TODO_ERROR,
    ADD_TODO_SUCCESS,
    DELETE_TODO_FAILURE,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_REQUEST,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_FAILURE
} from '../actions/todo';

const initialState = {
    todoData: [],
    error: null,
    isFetching: false,
    isDeleting: false,
    isEditing: false
};

export default function reducer(state = initialState, action){
    if(action.type === FETCH_TODO_REQUEST){
        return Object.assign({}, state, {
        todoData: [],
        isFetching: true
        });
    }
    else if(action.type === FETCH_TODO_SUCCESS){
        return Object.assign({}, state, {
            isFetching: false,
            todoData: action.data
        });
    }
    else if(action.type === FETCH_TODO_ERROR){
        return Object.assign({}, state, {
            error: action.error
        });
    }
    else if(action.type === ADD_TODO_ERROR){
        return Object.assign({}, state, {
           error: action.error 
        });
    }else if (action.type === ADD_TODO_SUCCESS){
        return Object.assign({}, state,{
           todoData: [...state.todoData, action.data]
        });
    }else if(action.type ===DELETE_TODO_REQUEST){
        return Object.assign({}, state,{
            isDeleting: true
        });
    }else if(action.type === DELETE_TODO_FAILURE){
        return Object.assign({}, state, {
            isDeleting: false,
            error: action.error
        });
    }else if(action.type === DELETE_TODO_SUCCESS){
       let filteredState = [...state.todoData.filter(todoItem => todoItem._id !== action.data)];
       return Object.assign({}, state, {
           isDeleting: false,
           todoData: filteredState
        });   
        
    }else if(action.type === UPDATE_TODO_REQUEST){
        return Object.assign({}, state, {
            isEditing: true
        });
    }else if(action.type === UPDATE_TODO_FAILURE){
        return Object.assign({}, state,{
            isEditing: false,
            error: action.error
        });
    }else if(action.type === UPDATE_TODO_SUCCESS){
        
        const updatedTodos = state.todoData.map((todo) => {
            
            if(todo._id !== action.data){

              return todo;
            }
            return { ...todo, ...action }
            
        })
        return Object.assign({}, state, {
            isEditing: false,
            todoData: updatedTodos

        });
    }
    return state;
}
