import React from 'react';
import {shallow} from 'enzyme';
import EventTypeSelector from './EventTypeSelector';

it('renders event list without crashing', () => {

  const eventTypes = [
    {
      EventTypeID: 1,
      EventTypeDesc: 'EventOne'
    }, {
      EventTypeID: 2,
      EventTypeDesc: 'EventTwo'
    }
  ];

  const list = shallow(<EventTypeSelector eventTypes={eventTypes}/>);
  expect(list.find('select').length === 2);
});
