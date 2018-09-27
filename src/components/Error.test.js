import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

it('renders without crashing', () => {
  const wrapper = shallow(<Error message="It should render error successfully"/>);
  const error = <p>It should render error successfully</p>;
  expect(wrapper.contains(error)).toBe(true);
  expect(wrapper.contains(error)).toEqual(true);
});
