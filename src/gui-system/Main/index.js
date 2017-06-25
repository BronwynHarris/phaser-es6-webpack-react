import React from 'react'

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../store'

import SimpleMessage from '../screens/SimpleMessage'
import * as styles from './Gui.css'

export default () => {

    return (
        <ConnectedRouter history={history}>
            <div className={styles.guiContainer}>
                <Route exact={true} path="/simple-message" component={SimpleMessage}/>
            </div>
        </ConnectedRouter>
    )
}