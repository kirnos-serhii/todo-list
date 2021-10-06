import * as React from "react";
import TodoItem from "../model/todo-item";
import TodoList from "./todo-list";
import CreateTaskForm from "./create-task-form";
import {FunctionComponent, useState} from "react";

const TodoListPage: FunctionComponent = () => {

    const [items, setItems] = useState(new Array<TodoItem>());

    function handleCreate(newTaskName: string): void {
        const newItem = new TodoItem(
            Date.now().toLocaleString(),
            newTaskName,
            false,
        );

        setItems(items.concat(newItem));
    }

    function handleDeleteItem(itemId: string) {

        setItems(items.filter((item) => item.id !== itemId));
    }

    function handleChangeDone(itemId: string, isDone: boolean) {
        const updatedItems = items.map((item) => {
            if (item.id === itemId) {
                item.isDone = isDone;
            }
            return item;
        })

        setItems(updatedItems);
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6">
                    <TodoList items={items}
                              onDeleteItem={handleDeleteItem}
                              onChangeDone={handleChangeDone}
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6">
                    <CreateTaskForm onCreate={handleCreate}/>
                </div>
            </div>
        </div>
    )
}

export default TodoListPage;
