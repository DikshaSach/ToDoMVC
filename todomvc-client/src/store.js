import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import todoReducer from './reducer/todo.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    combineReducers({
        form: formReducer,
        todo: todoReducer
    }),composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;