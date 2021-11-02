import {ADD_TODO, DELETE_TODO} from "../reducers/todoReducer";
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todo) => ({ type: ADD_TODO, todo: {id: uuidv4(), ...todo} });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id: id});
