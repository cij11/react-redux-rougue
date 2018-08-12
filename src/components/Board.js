import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Board extends Component {
    render() {
        return(
            <div>
                <ul>
                {this.props.tiles.map(row => {
                    return renderRow(row);
                }
                )}
                </ul>
            </div>
        )
    }
}

function renderRow(row) {
    return (
        <li>
        {
            row.map(column => {
                return (<span>{column}</span>);
            })
        }
        </li>
    )
}

Board.propTypes = {
    tiles: PropTypes.array.isRequired,
}

export default Board;