import React from 'react';
import {shallow} from 'enzyme';
import EventList from './EventList';

it('renders event list without crashing', () => {

  const events = [
    {
      EventName: 'FirstEvent',
      AdvertisedStartTime: '2018-09-10T02:08:00Z',
      Venue: {
        Venue: 'Racetrack'
      }
    }, {
      EventName: 'SecondEvent',
      AdvertisedStartTime: '2018-09-10T02:08:00Z',
      Venue: {
        Venue: 'Racetrack'
      }
    }
  ];

  const list = shallow(<EventList events={events}/>);
  expect(list.find('.eventList').length === 2);
});
