import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditRouter';
import { wrap } from 'module';

let editExpense, startRemoveExpenses, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpenses = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      startRemoveExpenses={startRemoveExpenses}
      history={history}
      expense={expenses[2]}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editexpense",()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
});

test("should handle remove Expense",()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenses).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});

