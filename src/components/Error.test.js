import React from 'react';
import ReactDOM from 'react-dom';
import Error from './Error';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error message="It should render successfully"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
