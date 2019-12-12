import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test("should correctly render ExpensSummary with 1 expense",()=>{
    const wrapper =shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensSummary with 1 expense",()=>{
    const wrapper =shallow(<ExpensesSummary expensesCount={32} expensesTotal={2353214134} />);
    expect(wrapper).toMatchSnapshot();
});