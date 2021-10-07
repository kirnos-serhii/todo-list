import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './todo-list-slice'
import TodoItem from "../model/todo-item";

export interface AppState {
    todoList: {
        items: TodoItem[],
    },
}

export const getStore = () => configureStore<AppState>({
    reducer: {
        todoList: todoListReducer,
    }
})
