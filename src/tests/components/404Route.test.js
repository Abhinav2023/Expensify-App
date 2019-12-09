import React from 'react';
import {shallow} from  'enzyme';
import NotFoundPage from '../../components/404Router';

test("should render 404Not Found Page",()=>{
    const wrapper =shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
})