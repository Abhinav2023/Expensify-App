import { shallow } from "enzyme";
import moment from 'moment';
import React from 'react';
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { altFilters, filters } from '../fixtures/filters';

let setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount,wrapper;

beforeEach(()=>{
    setEndDate=jest.fn();
    setStartDate=jest.fn();
    sortByAmount=jest.fn();
    sortByDate=jest.fn();
    setTextFilter=jest.fn();
    wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render Expenselist filter correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render Expnese flist filter with alt data correctly',()=>{
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test("should render expenselist filter with text changes",()=>{
    const value='rent';
    wrapper.find('input').simulate('change',{
        target: {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
      filters: altFilters
    });
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

// test('should rhandle data changes',()=>{
//     const startDate=moment(0).add(4,"years");
//     const endDate=moment(0).add(8,'years');
//     wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
//     expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//     expect(setEndDate).toHaveBeenLastCalledWith(endDate);
// });

// test("should handle date focus change",()=>{
//     const calenderFocused='endDate';
//     wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
//     expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
// })