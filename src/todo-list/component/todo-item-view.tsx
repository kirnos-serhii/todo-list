import * as React from 'react';
import TodoItem from "../model/todo-item";
import {FunctionComponent} from "react";

interface Props {
    item: TodoItem,
    key: string,
    onDelete: (todoItem: TodoItem) => void,
    onChangeDone: (isDone: boolean) => void,
}

const TodoItemView: FunctionComponent<Props> = (props) => {
    return (
        <div className={`alert alert-dismissible fade show p-2 ${props.item.isDone?'alert-success':'alert-primary'}`}
             role="alert">
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                       checked={props.item.isDone}
                       onChange={(e) => props.onChangeDone(e.currentTarget.checked)}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">{props.item.name}</label>
            </div>

            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                    onClick={() => {props.onDelete(props.item)}}/>
        </div>
    )
}

export default TodoItemView
