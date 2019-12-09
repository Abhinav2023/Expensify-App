import React from 'react';
import {shallow} from 'enzyme';
import ExpenseFrom from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from 'moment';

test("should render expense form ",()=>{
    const wrapper =shallow(<ExpenseFrom/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render expense form with expenses",()=>{
    const wrapper=shallow(<ExpenseFrom expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submisssion",()=>{
    const wrapper=shallow(<ExpenseFrom/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{ }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should render descritpion on input change",()=>{
    const value="New Description";
    const wrapper=shallow(<ExpenseFrom/>);
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test("should render note on input change",()=>{
    const value="New note";
    const wrapper=shallow(<ExpenseFrom/>);
    wrapper.find('textarea').simulate('change',{
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test("should render amunt on input change",()=>{
    const value="23.50";
    const wrapper=shallow(<ExpenseFrom/>);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
})

test("should not render amunt on input change",()=>{
    const value="23.503";
    const wrapper=shallow(<ExpenseFrom/>);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe("");
});

test("should call onsubmit for valid form submission ",()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseFrom expense={expenses[0]} onSubmit= {onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

// test('should set new date on date change', () => {
//     const now = moment();
//     const wrapper = shallow(<ExpenseFrom />);
//     wrapper.find('SingleDatePicker').at(0).prop('onDateChange')(now);
//     expect(wrapper.state('createdAt')).toEqual(now);
// });     

// test('should set new date on date change', () => {
//     const focused=true;
//     const wrapper = shallow(<ExpenseFrom />);
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
//     expect(wrapper.state('calenderFocused')).toEqual(focused);
// }); 