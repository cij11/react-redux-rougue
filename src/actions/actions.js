export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CREATE_MAP = 'CREATE_MAP';

export const addMessage = message => ({
    type: ADD_MESSAGE,
    message
});

export const createMap = () => ({
    type: CREATE_MAP,
});