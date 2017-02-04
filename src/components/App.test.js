import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {

  beforeAll(() => {
    // If console gives error, test fails
    console.error = error => {
      throw new Error(error);
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

});

