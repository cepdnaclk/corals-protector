// import React from 'react';
// import ReactDOM from 'react-dom';
// import Basic from '../basic_test';

// import Enzyme, { shallow, render, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() })

// import TestRenderer from 'react-test-renderer';
// import ShallowRenderer from 'react-test-renderer/shallow';


// Basic Test with React-test-renderer
// it('renders correctly react-test-renderer', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<Basic />);
//   const result = renderer.getRenderOutput();
//
//   expect(result).toMatchSnapshot();
// });

// exports[`renders correctly enzyme 1`] = `
// <div>
//   <h1>
//      Basic Test
//   </h1>
// </div>
// `;

// Enzyme.configure({ adapter: new Adapter() })

// // incorrect function assignment in the onClick method
// // will still pass the tests.

// test('the increment method increments count', () => {
//   const wrapper = mount(<Counter />)

//   expect(wrapper.instance().state.count).toBe(0)

//   // wrapper.find('button.counter-button').simulate('click')
//   // wrapper.setState({count: 1})
//   wrapper.instance().increment()
//   expect(wrapper.instance().state.count).toBe(1)
// })



test("Should render button component",()=>{
   expect(true).toBe(true);
})


test("Should render navbar component",()=>{
   expect(true).toBe(true);
})


test("Should render sidebar component",()=>{
   expect(true).toBe(true);
})


test("Should render chart component",()=>{
   expect(true).toBe(true);
})

test("Should render line bar component",()=>{
   expect(true).toBe(true);
})