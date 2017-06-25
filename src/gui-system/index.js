import React from 'react'
import {render} from 'react-dom';

import { Provider } from 'react-redux';

import store from './store'
import { saveGameConfiguration } from './Gui/behaviors'

import Gui from './Gui';

export function connect(width, height) {
    render(
        <Provider store={store}>
            <Gui />
        </Provider>,
        document.getElementById('gui')
    );

    store.dispatch(saveGameConfiguration(width, height))
}
