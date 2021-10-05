import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import TodoList from "../../todo-list/component/todo-list";
import TodoItem from "../../todo-list/model/todo-item";
import constants from "./helper";

describe('TodoList', () => {

    test('Should render expected empty todo-list component', () => {
        const expectedItems = 0;
        render(<TodoList items={[]}
                         onDeleteItem={() => {}}
                         onChangeDone={() =>{}}/>);

        expect(screen.queryAllByTestId(constants.todoItemRowId).length).toBe(expectedItems);
    });

    test('Should render expected not empty todo-list component', () => {
        const expectedItems = 2;
        const items = new Array<TodoItem>();
        items.push(new TodoItem('1', 'name1', true));
        items.push(new TodoItem('2', 'name2', true));
        render(<TodoList items={items}
                         onDeleteItem={() => {}}
                         onChangeDone={() =>{}}/>);

        expect(screen.queryAllByTestId(constants.todoItemRowId).length).toBe(expectedItems);
    });

    test('Should call delete handler when click on delete button on item row', () => {
        const onDeleteItemSpy = jest.fn();
        const items = new Array<TodoItem>();
        items.push(new TodoItem('1', 'name1', true));
        items.push(new TodoItem('2', 'name2', true));
        render(<TodoList items={items}
                         onDeleteItem={onDeleteItemSpy}
                         onChangeDone={() =>{}}/>);

        fireEvent.click(screen.getAllByTestId(constants.closButtonTestId)[0]);

        const expectedCalls = 1;
        expect(onDeleteItemSpy.mock.calls.length).toBe(expectedCalls);
    });

    test('Should call change handler when click on checkbox on item row', () => {
        const onChangeDoneSpy = jest.fn();
        const items = new Array<TodoItem>();
        items.push(new TodoItem('1', 'name1', true));
        items.push(new TodoItem('2', 'name2', true));
        render(<TodoList items={items}
                         onDeleteItem={() =>{}}
                         onChangeDone={onChangeDoneSpy}/>);

        fireEvent.click(screen.getByLabelText('name1'));

        const expectedCalls = 1;
        expect(onChangeDoneSpy.mock.calls.length).toBe(expectedCalls);
    });
});
