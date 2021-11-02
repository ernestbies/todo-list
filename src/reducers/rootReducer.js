import { combineReducers } from 'redux';
import {drawerReducer} from "./drawerReducer";
import {todoReducer} from "./todoReducer";

export const rootReducer = combineReducers({
    drawerReducer,
    todoReducer
});
