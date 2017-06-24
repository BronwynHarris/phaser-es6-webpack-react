import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import MainScreen from '../screens/Main'
import * as styles from './Gui.css'

export default () => {

    return (
        <Router>
            <div className={styles.guiContainer}>
                <Route exact={true} path="/" component={MainScreen}/>
            </div>
        </Router>
    )
}