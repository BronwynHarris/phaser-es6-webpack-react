import React from 'react'
import {render} from 'react-dom';

import { Provider } from 'react-redux';

import store from './store'

import Routes from './Routes';

import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'


render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('gui')
)