import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import themeReducer from './reducers/themeReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const persistedState = localStorage.getItem('themeState') ? JSON.parse(localStorage.getItem('themeState')) : {}
const store = createStore(themeReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{ localStorage.setItem('themeState', JSON.stringify(store.getState()))} )

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
