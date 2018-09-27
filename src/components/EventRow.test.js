import React from 'react';
import { shallow } from 'enzyme';
import EventRow from './EventRow';

it('renders event row without crashing', () => {

  const selector = shallow(<EventRow name="Racing" venue="Race Track" time="2018-09-10T02:08:00Z"/>);

  const nameItem = <div className="eventDetails">Racing</div>
  const venueItem = <div className="eventDetails">Racing</div>
  const timeItem = <div className="eventDetails">Monday, Sep 10, 2018, 12:08 PM</div>

  expect(selector.contains(nameItem)).toEqual(true);
  expect(selector.contains(venueItem)).toEqual(true);
  expect(selector.contains(timeItem)).toEqual(true);
});
