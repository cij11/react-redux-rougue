import { ADD_MESSAGE } from '../actions/actions';
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
const reducer = combineReducers(
    {
        messages,
    }
)

export default reducer;