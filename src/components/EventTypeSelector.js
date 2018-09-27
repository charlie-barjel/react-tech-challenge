import React from 'react';

const EventTypeSelector = ({eventTypes, onSelectHandler}) => {

  const radioButtons = eventTypes.map(type =>
    <option key={type.EventTypeID} value={type.EventTypeID}>{type.EventTypeDesc}</option>)

  return (<select onChange={onSelectHandler}>
    <option key={0} value={0}>All</option>
    {radioButtons}</select>);
};

export default EventTypeSelector;
