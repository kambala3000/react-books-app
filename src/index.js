import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './scripts/store/configureStore';

import routes from './scripts/routes';
import registerServiceWorker from './scripts/registerServiceWorker';
import './css/index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
