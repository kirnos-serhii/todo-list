import * as React from 'react';
import TodoItemView from "./todo-item-view";
import TodoItem from "../model/todo-item";
import {FunctionComponent} from "react";

interface Props {
    items: Array<TodoItem>,
    onDeleteItem: (todoItem: TodoItem) => void,
    onChangeDone: (todoItem: TodoItem, isDone: boolean) => void,
}

const TodoList: FunctionComponent<Props> = (props) => {
    return (
        <div>
            {props.items.map(item => (
                <TodoItemView item={item} key={item.id}
                              onDelete={props.onDeleteItem}
                              onChange={(isDone) => props.onChangeDone(item, isDone)}
                />
            ))}
        </div>
    )
}

export default TodoList
