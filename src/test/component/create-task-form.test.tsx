import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import CreateTaskForm from "../../todo-list/component/create-task-form";
import constants from "./helper";

describe('CreateTaskForm', () => {
    test('Should render expected component', () => {
        render(<CreateTaskForm onCreate={() => {}}/>);

        expect(screen.getByText(constants.addButtonName)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(constants.taskInputPlaceholder)).toBeInTheDocument();
    });

    test('Should show error message if try create empty task', () => {
        render(<CreateTaskForm onCreate={() => {}}/>);

        screen.getByText(constants.addButtonName).click();
        const invalidFeedback = screen.getByText('Value can\'t be empty');
        expect(invalidFeedback).toBeInTheDocument();
        expect(invalidFeedback).toHaveStyle(`color: #E00`);
    });

    test('Shouldn\'t show error message if try create not empty task', () => {
        render(<CreateTaskForm onCreate={() => {}}/>);
        const notEmptyInputValue = '23';
        const input = screen.getByPlaceholderText(constants.taskInputPlaceholder);
        fireEvent.change(input, {target: {value: notEmptyInputValue}});

        screen.getByText(constants.addButtonName).click();

        const invalidFeedback = screen.queryByText('Value can\'t be empty');
        expect(invalidFeedback).toBeNull();
    });

    test('Should once call onCreate with expected value', () => {
        const onCreateSpy = jest.fn();
        render(<CreateTaskForm onCreate={onCreateSpy}/>);
        const notEmptyInputValue = '23';
        const input = screen.getByPlaceholderText(constants.taskInputPlaceholder);
        fireEvent.change(input, {target: {value: notEmptyInputValue}});

        screen.getByText(constants.addButtonName).click();

        expect(onCreateSpy.mock.calls.length).toBe(1);
        expect(onCreateSpy.mock.calls[0][0]).toBe(notEmptyInputValue);
    })
});
