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

    function handleDeleteItem(item: TodoItem) {
        const index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
        }

        setItems(new Array<TodoItem>().concat(items));
    }

    function handleChangeDone(todoItem: TodoItem, isDone: boolean) {
        const index = items.indexOf(todoItem);
        items[index].isDone = isDone;

        setItems(new Array<TodoItem>().concat(items));
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
