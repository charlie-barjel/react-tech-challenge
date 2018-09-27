import React from 'react';

const EventTypeSelector = ({eventTypes, onSelectHandler}) => {

  const options = eventTypes.map(type => <option key={type.EventTypeID} value={type.EventTypeID}>{type.EventTypeDesc}</option>)

  return (<div className="eventSelector">
    <select  onChange={onSelectHandler}>
      <option key={0} value={0}>All</option>
      {options}
    </select>
  </div>);
};

export default EventTypeSelector;
