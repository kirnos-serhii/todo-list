import * as React from "react";
import TodoList from "./todo-list";
import CreateTaskForm from "./create-task-form";
import {FunctionComponent} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {createItem, deleteItem, changeItem} from "../store/todo-list-slice"

const TodoListPage: FunctionComponent = () => {

    const items = useAppSelector(state => state.todoList.items)
    const dispatch = useAppDispatch()

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <TodoList items={items}
                              onDeleteItem={(id) => {
                                  dispatch(deleteItem(id));
                              }}
                              onChangeDone={(id, isDone) => {
                                  dispatch(changeItem({itemId: id, isDone}));
                              }}
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6">
                    <CreateTaskForm onCreate={(name) => {
                        dispatch(createItem(name));
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default TodoListPage;
