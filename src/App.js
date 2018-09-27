import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import EventTypeSelector from './components/EventTypeSelector';
import Error from './components/Error';
import EventRow from './components/EventRow';

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

    const events = this.state.filteredEvents.map((e, idx) => <EventRow key={idx} name={e.EventName} venue={e.Venue.Venue} time={this.formatDate(e.AdvertisedStartTime)}/>);

    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">BetEasy Front End Tech Challenge</h1>
      </header>

      <EventTypeSelector eventTypes={this.state.eventTypes} onSelectHandler={this.eventTypeHandler}/>
      {
        this.state.hasError
          ? <Error message={this.state.error}/>
          : <div className="wrapper">
              <div className="wrapperTitle">Next to jump</div>
              <div className="eventList">
                {events}
              </div>
            </div>
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

  formatDate(dateString) {

    const date = new Date(dateString);

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleString('en-us', options);
  }
}

export default App;
