import React from 'react'
import {render} from 'react-dom';

import { Provider } from 'react-redux';

import store from './store'
import { saveGameConfiguration } from './Main/behaviors'

import Main from './Main';

export function connect(parentId, width, height) {

    const parentElem = document.getElementById(parentId)
    parentElem.style.width=width + 'px'
    parentElem.style.height=height + 'px'

    const guiContainer = document.createElement('div')
    parentElem.appendChild(guiContainer)

    render(
        <Provider store={store}>
            <Main />
        </Provider>,
        guiContainer
    );

    store.dispatch(saveGameConfiguration(width, height))
}
