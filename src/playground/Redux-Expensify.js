import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense=(
    {
        description= '',
        note= '',
        amount= 0,
        createAt= 0
    }={}
)=>({
    type: "ADD_EXPENSE",
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

const expenseReducerDefaultState=[];

const expenseReducer=(state=expenseReducerDefaultState,action)=>{
    switch (action.type){
        case "ADD_EXPENSE":
            return[
                ...state,
                action.expense
            ];
        default:
            return state
    }
}

const filtersReducerDefaultState={
    text: "",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer=(state=filtersReducerDefaultState,action)=>{
    switch (action.type){
        default:
            return state
    }
}

const store=createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
)

store.subscribe(()=>{
    console.log(store.getState());
})

const expenseOne=store.dispatch(addExpense({description:"Rent",amount: 100}));
const expenseTwo=store.dispatch(addExpense({description:"Coffee",amount: 1200}));


const demoState={
    expenses: [{
        id: 'pacbayhcguayggya',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 1000,
        cretedAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};