import React from 'react'
import {render} from 'react-dom';

import { Provider } from 'react-redux';

import store from './store'

render(
    <Provider store={store}>
        <MyGui />
    </Provider>,
    document.getElementById('gui')
)


function MyGui() {
    return (<div>React Is absolutely Ready</div>)
}

