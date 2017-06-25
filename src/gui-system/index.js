import React from 'react'
import {render} from 'react-dom';

import { Provider } from 'react-redux';

import store from './store'

import Gui from './Gui';

import * as bridge from './bridge'



export function connect(game) {

    console.log('Connected to : ', game)
    render(
        <Provider store={store}>
            <Gui />
        </Provider>,
        document.getElementById('gui')
    );

    bridge.listenForGuiGameEvents(game)
}

export function guiAction(type, payload) {
    bridge.guiAction(type, payload)
}