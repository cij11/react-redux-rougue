import { ADD_MESSAGE, CREATE_MAP } from '../actions/actions';
import { combineReducers } from 'redux';

function messages (messages = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return [
                ...messages,
                action.message
            ]
        default:
            return messages;
    }
}

function generateMap() {
    return [
        ['#', '#', '#', '#', '#'],
        ['#', '.', '.', '.', '#'],
        ['#', '#', '#', '#', '#'],
    ]
}

function game (game = {}, action) {
    switch(action.type) {
        case CREATE_MAP:
            return {
                ...game,
                walls : generateMap()
            }
        default:
            return game;
    }
}

const reducer = combineReducers(
    {
        messages,
        game,
    }
)

export default reducer;