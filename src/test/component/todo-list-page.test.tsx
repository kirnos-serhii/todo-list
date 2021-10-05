import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import TodoListPage from "../../todo-list/component/todo-list-page";
import constants from "./helper";
import userEvent from "@testing-library/user-event";

describe('TodoListPage', () => {

    test('Should render expected component', () => {
        render(<TodoListPage />);

        expect(screen.getByPlaceholderText(constants.taskInputPlaceholder)).toBeInTheDocument();
        expect(screen.getByText(constants.addButtonName)).toBeInTheDocument();
        expect(screen.queryByTestId(constants.todoItemRowId)).toBeNull();
    });

    test('Should create task with expected state', () => {
        render(<TodoListPage />);

        const newTaskName = 'Random name of the task';
        fireEvent.change(screen.getByPlaceholderText(constants.taskInputPlaceholder),
            {target: {value: newTaskName}});
        userEvent.click(screen.getByText(constants.addButtonName));

        const expectedItems = 1;
        expect(screen.getAllByTestId(constants.todoItemRowId).length).toBe(expectedItems);
        expect(screen.getByText(newTaskName)).toBeInTheDocument();
        expect(screen.getByLabelText(newTaskName)).not.toBeChecked();
    });

    test('Should delete task from list when click on delete button', () => {
        render(<TodoListPage />);
        const newTaskName = 'Random name of the task';
        fireEvent.change(screen.getByPlaceholderText(constants.taskInputPlaceholder),
            {target: {value: newTaskName}});
        userEvent.click(screen.getByText(constants.addButtonName));

        userEvent.click(screen.getByTestId(constants.closButtonTestId));

        expect(screen.queryByTestId(constants.todoItemRowId)).toBeNull();
    });

    test('Should change task when click on task checkbox', () => {
        render(<TodoListPage />);
        const newTaskName = 'Random name of the task';
        fireEvent.change(screen.getByPlaceholderText(constants.taskInputPlaceholder),
            {target: {value: newTaskName}});
        userEvent.click(screen.getByText(constants.addButtonName));

        userEvent.click(screen.getByLabelText(newTaskName));

        expect(screen.getByLabelText(newTaskName)).toBeChecked();
    });
});
