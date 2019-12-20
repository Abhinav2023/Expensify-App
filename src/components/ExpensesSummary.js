import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expense-total';

export const ExpensesSummary=({expensesCount,expensesTotal})=>{
    const expenseWord=expensesCount===1 ? 'expense' : 'expenses';
    const formattedExpensesTotal=numeral(expensesTotal/100).format('$0,0.00');
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <div class="button_cont" align="center">
                        <a class="example_e" href="/create">
                            Add Expense
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps=(state)=>{
    const visibleExpenses=selectExpenses(state.expenses,state.filters);
    return{
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);