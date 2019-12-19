import React from 'react';
import {shallow} from  'enzyme';
import {LoginPage} from '../../components/LoginRouter';

test("should render Login Page",()=>{
    const wrapper =shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
})