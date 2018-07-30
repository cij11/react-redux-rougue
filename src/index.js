import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './containers/Game';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addMessage } from './actions/actions';

const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addMessage('test1'));
store.dispatch(addMessage('test2'));
store.dispatch(addMessage('test3'));

ReactDOM.render(
    <Provider store={store}>
            <Game />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
