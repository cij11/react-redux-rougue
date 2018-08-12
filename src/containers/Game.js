import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Board from '../components/Board';

class Game extends Component {
  render() {
    const tiles = this.props.walls;
    return (
      <div><Board tiles={tiles}/></div>
    )
  }
}

const mapStateToProps = state => ({
  walls: state.game.walls,
});

export default connect(
  mapStateToProps,
)(Game);

Game.propTypes = {
  walls: PropTypes.array.isRequired,
};