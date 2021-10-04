import * as React from 'react';
import TodoItem from "../model/todo-item";
import {FunctionComponent} from "react";
import styled from 'styled-components';

interface Props {
    item: TodoItem,
    key: string,
    onDelete: (todoItem: TodoItem) => void,
    onChange: (isDone: boolean) => void,
}

const ButtonClose = styled.button`
  padding: 13px !important;
  font-size: 14px;
`;

const TodoItemView: FunctionComponent<Props> = (props) => {
    return (
        <div className={`alert alert-dismissible fade show p-2 ${props.item.isDone?'alert-success':'alert-primary'}`}
             role="alert" data-testid="todo-item">
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                       checked={props.item.isDone}
                       onChange={(e) => props.onChange(e.currentTarget.checked)}
                       id={props.item.id}/>
                <label className="form-check-label" htmlFor={props.item.id}>{props.item.name}</label>
            </div>

            <ButtonClose type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                    onClick={() => {props.onDelete(props.item)}} data-testid="close-button"/>
        </div>
    )
}

export default TodoItemView
