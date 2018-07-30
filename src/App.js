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
      </div>
    );
  }
}

App.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default App;
