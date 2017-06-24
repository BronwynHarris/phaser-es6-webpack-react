import React from 'react'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import MainScreen from './screens/Main'

export default () => {

    return (
        <Router>
            <div>
                <Route exact={true} path="/" component={MainScreen}/>
            </div>
        </Router>
    )
}