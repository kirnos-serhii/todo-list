import * as React from 'react';
import TodoItemView from "./todo-item-view";
import TodoItem from "../model/todo-item";
import {FunctionComponent} from "react";

interface Props {
    items: TodoItem[],
    onDeleteItem: (itemId: string) => void,
    onChangeDone: (itemId: string, isDone: boolean) => void,
}

const TodoList: FunctionComponent<Props> = (props) => {
    return (
        <React.Fragment>
            {props.items.map(item => (
                <TodoItemView item={item} key={item.id}
                              onDelete={() => props.onDeleteItem(item.id)}
                              onChange={() => props.onChangeDone(item.id, !item.isDone)}
                />
            ))}
        </React.Fragment>
    )
}

export default TodoList
