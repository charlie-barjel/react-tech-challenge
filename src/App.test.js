import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Welcome to React</h1>;
  expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
