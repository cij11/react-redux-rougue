import { ADD_MESSAGE } from '../actions/actions';

const initialState = {
    messages: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
    }
    return state;
}

export default reducer;