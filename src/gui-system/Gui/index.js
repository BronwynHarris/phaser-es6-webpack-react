import React from 'react'

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../store'

import MainScreen from '../screens/Main'
import * as styles from './Gui.css'

export default () => {

    return (
        <ConnectedRouter history={history}>
            <div className={styles.guiContainer}>
                <Route exact={true} path="/" component={MainScreen}/>
            </div>
        </ConnectedRouter>
    )
}