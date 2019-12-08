import {addExpense,editExpense,removeExpense} from "../../actions/expenses";
import { exportAllDeclaration } from "@babel/types";

test("should setup remove expense action object",()=>{
    const action =removeExpense({id: "123abc"});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "123abc"
    });
});

test("should setUp edit expense action object",()=>{
    const action=editExpense("123abc",{note: "New note values"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: "New note values"
        }
    });
});

test("should setup add expense action object with provided values",()=>{
    const expenseData={
        description:"Rent",
        amount: 1233,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("should setup add expense action object with default values",()=>{
    const action=addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: "",
            note : '',
            createdAt: 0,
            amount: 0,
            id: expect.any(String)
        }
    });
});