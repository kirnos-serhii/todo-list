import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import CreateTaskForm from "../../todo-list/component/create-task-form";

describe('Create task form', () => {
    test('Should render expected component', () => {
        render(<CreateTaskForm handleCreate={() => {}}/>);

        expect(screen.getByText('Add')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Task name')).toBeInTheDocument();
    });

    test('Should show error message if try create empty task', () => {
        render(<CreateTaskForm handleCreate={() => {}}/>);

        screen.getByText('Add').click();
        const invalidFeedback = screen.getByText('Value can\'t be empty');
        expect(invalidFeedback).toBeInTheDocument();
        expect(invalidFeedback).toHaveStyle(`color: #E00`)
    });

    test('Shouldn\'t show error message if try create not empty task', () => {
        render(<CreateTaskForm handleCreate={() => {}}/>);
        const notEmptyInputValue = '23';
        const input = screen.getByPlaceholderText('Task name');

        fireEvent.change(input, {target: {value: notEmptyInputValue}});
        screen.getByText('Add').click();

        const invalidFeedback = screen.queryByText('Value can\'t be empty');
        expect(invalidFeedback).toBeNull();
    });
});
