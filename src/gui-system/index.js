import React from 'react'
import {render} from 'react-dom';

import { Provider } from 'react-redux';

import store from './store'

import Gui from './Gui';


render(
    <Provider store={store}>
        <Gui />
    </Provider>,
    document.getElementById('gui')
)