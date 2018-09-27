import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import EventTypeSelector from './components/EventTypeSelector';
import Error from './components/Error';
import Header from './components/Header';
import EventList from './components/EventList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
      filteredEvents: [],
      eventTypes: [],
      hasError: false,
      error: ''
    }

    this.eventTypeHandler = this.eventTypeHandler.bind(this);
    this.apiUrl = 'https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump';
  }

  eventTypeHandler(e) {
    const id = e.target.value;
    this.setState({
      filteredEvents: id === "0"
        ? this.state.events
        : this.state.events.filter(event => event.EventType.EventTypeID == e.target.value)
    });
  }

  render() {

    return (<div className="App">
      <Header />
      <EventTypeSelector eventTypes={this.state.eventTypes} onSelectHandler={this.eventTypeHandler}/>
      {
        this.state.hasError
          ? <Error message={this.state.error}/>
          : <EventList events={this.state.filteredEvents} />
      }
    </div>);
  }

  componentDidMount() {
    axios.get(this.apiUrl).then(response => {
      const data = response.data;
      if (data.success === true) {
        this.setState({
          events: data.result,
          filteredEvents: data.result,
          eventTypes: this.getEventTypes(data.result)
        });
      }
    }).catch(error => {
      console.log("Error ", error)
      this.setState({hasError: true, error: 'Unable to retrieve latest events. Please try again later.'})
    });
  }

  getEventTypes(events) {
    const eventTypes = events.map(e => e.EventType);
    return this.removeDuplicates(eventTypes, 'EventTypeID')
  }

  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
}

export default App;
