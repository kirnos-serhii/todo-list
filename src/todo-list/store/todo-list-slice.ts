import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import TodoItem from "../model/todo-item";

interface TodoListState {
    items: TodoItem[]
}

const initialState: TodoListState = {
    items: []
}

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        createItem: (state, action: PayloadAction<string>) => {
            const newItem = new TodoItem(
                Date.now().toLocaleString(),
                action.payload,
                false,
            );

            state.items = state.items.concat(newItem);
        },

        deleteItem(state, action: PayloadAction<string>) {

            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        changeItem(state, action: PayloadAction<{itemId: string, isDone: boolean}>) {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.itemId) {
                    item.isDone = action.payload.isDone;
                }
                return item;
            });
        }
    }
})

export const { createItem, deleteItem, changeItem } = todoListSlice.actions

export default todoListSlice.reducer
