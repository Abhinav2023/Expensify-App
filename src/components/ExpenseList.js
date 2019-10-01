import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';

const ExpenseList=(props)=>(
    <div>
        <h1>Expenses List</h1>
        {props.filters.text}
        {props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToProps=(state)=>{
    return {
        expenses: SelectExpenses(state.expenses,state.filters),
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);