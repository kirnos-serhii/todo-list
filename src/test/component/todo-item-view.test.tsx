import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import TodoItemView from "../../todo-list/component/todo-item-view";
import TodoItem from "../../todo-list/model/todo-item";

describe('TodoItemView', () => {

    test('Should render expected in progress component', () => {
        const taskName = 'Task name';
        const taskId = 'TaskId';
        render(<TodoItemView key={''}
                             item={new TodoItem(taskId, taskName, false)}
                             onChange={() => {}}
                             onDelete={() => {}}/>);

        const checkbox = screen.getByLabelText(taskName);
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        expect(screen.getByTestId('todo-item')).toHaveClass('alert-primary');

        expect(screen.getByText(taskName)).toBeInTheDocument();

        expect(screen.getByTestId('close-button')).toBeInTheDocument();
    });

    test('Should render expected done component', () => {
        const taskName = 'Task name';
        const taskId = 'TaskId';
        render(<TodoItemView key={''}
                             item={new TodoItem(taskId, taskName, true)}
                             onChange={() => {}}
                             onDelete={() => {}}/>);

        const checkbox = screen.getByLabelText(taskName);
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).toBeChecked();

        expect(screen.getByTestId('todo-item')).toHaveClass('alert-success');

        expect(screen.getByText(taskName)).toBeInTheDocument();

        expect(screen.getByTestId('close-button')).toBeInTheDocument();
    });

    test('Should call on delete event handler with expected param when click delete button', () => {
        const taskName = 'Task name';
        const taskId = 'TaskId';
        const onDeleteSpy = jest.fn();
        const item = new TodoItem(taskId, taskName, true);
        render(<TodoItemView key={''}
                             item={item}
                             onChange={() => {}}
                             onDelete={onDeleteSpy}/>);

        screen.getByTestId('close-button').click();

        expect(onDeleteSpy.mock.calls.length).toBe(1);
        expect(onDeleteSpy.mock.calls[0][0]).toBe(item);
    });

    test('Should call on change event handler with expected param when click delete button', () => {
        const taskName = 'Task name';
        const taskId = 'TaskId';
        const onChangeSpy = jest.fn();
        const item = new TodoItem(taskId, taskName, true);
        render(<TodoItemView key={''}
                             item={item}
                             onChange={onChangeSpy}
                             onDelete={() => {}}/>);

        fireEvent.click(screen.getByLabelText(taskName));

        expect(onChangeSpy.mock.calls.length).toBe(1);
        expect(onChangeSpy.mock.calls[0][0]).toBe(false);
    });
});
