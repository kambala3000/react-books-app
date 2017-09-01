import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import watch from 'redux-watch';

import './css/index.css';
import App from './scripts/components/App';
import configureStore from './scripts/store/configureStore';
import registerServiceWorker from './scripts/registerServiceWorker';

const store = configureStore();
const watchFavorites = watch(store.getState, 'favorites');
store.subscribe(
    watchFavorites(newVal => {
        localStorage.setItem('favorites', JSON.stringify(newVal));
        console.log(JSON.parse(localStorage['favorites']));
    })
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
