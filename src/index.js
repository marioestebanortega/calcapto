import React from 'react'
import ReactDOM from 'react-dom'
import RouterApp from './routes/RouterApp';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import initState from './services/initVals.json';
import reducer from './reducers/reducers'

const store=createStore(reducer,initState);

ReactDOM.render(
    <Provider store={store}>
        <RouterApp />
    </Provider>
    , document.getElementById('app'));