import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import './index.css';
import Dashboard from './Dashboard';
import rootReducer from './store/rootReducer.js'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><Dashboard /></Provider>, document.getElementById('root'));


