import { connect } from 'react-redux';

import App from '../App';

const mapStateToProps = state => ({
  messages: state.messages,
});

const Game = connect(
  mapStateToProps,
)(App);

export default Game;