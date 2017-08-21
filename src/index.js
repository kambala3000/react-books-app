import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './scripts/store/configureStore';

import App from './scripts/components/App';
import registerServiceWorker from './scripts/registerServiceWorker';
import './css/index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
