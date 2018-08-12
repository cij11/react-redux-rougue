import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          {this.props.messages.map(m => <li>{m}</li>)}
          {this.props.messages.map((m) => {return <li>Equivalent: {m}</li>})}
        </ul>
        <svg>
  <path d="M 20 20 V 80 H 50" stroke="black" stroke-width="2" fill="transparent" />
</svg>
      </div>
    );
  }
}

App.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default App;
