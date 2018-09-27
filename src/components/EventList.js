import React from 'react';
import EventRow from './EventRow';

const EventList = ({events}) => {

  const rows = events.map((e, idx) => <EventRow key={idx} name={e.EventName} venue={e.Venue.Venue} time={e.AdvertisedStartTime}/>);
  return (<div className="wrapper">
      <div className="wrapperTitle">Next to jump</div>
      <div className="eventList">
        {rows}
      </div>
    </div>);
};

export default EventList;
