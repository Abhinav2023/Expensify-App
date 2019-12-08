import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import { exportAllDeclaration } from '@babel/types';


test("should render Header correctly",()=>{
    const wrapper=shallow(<Header />);
    expect(wrapper.find('h1').length.text()).toBe("Expensify App")
    // const renderer =new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})
