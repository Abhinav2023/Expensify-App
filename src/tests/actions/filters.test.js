import moment from "moment";
import {setStartDate,setEndDate,setTextFilter,sortByAmount,sortByDate} from "../../actions/filters";
import { exportAllDeclaration, exportNamedDeclaration, isDeclareExportDeclaration } from "@babel/types";

test("should generate set start date filter",()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test("should generate set end date",()=>{
    const action =setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test("should generate set text filter ",()=>{
    const action=setTextFilter("abhinav");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: "abhinav"
    })
});

test("should generate sort by amount filter ",()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test("should generate sort by date filter",()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})