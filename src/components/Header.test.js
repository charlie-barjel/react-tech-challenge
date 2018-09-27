import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  const welcome = <h1 className="title">BetEasy Front End Tech Challenge</h1>;
  expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
