import React from 'react';
import { push } from 'react-router-redux'

import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import store from '../store'

import * as actionCreators from './behaviors'
import SimpleMessage from './SimpleMessage'

export function show(message, onClose) {
    store.dispatch(push('/simple-message'))
    store.dispatch(actionCreators.showMessage(message, onClose))
}

function mapStateToProps(state) {
    return {
        message: state.simpleMessage.get('message'),
        gameWidth: state.main.getIn(['gameConfig', 'width']),
        gameHeight: state.main.getIn(['gameConfig', 'height']),
    }
}

export default withRouter(connect(mapStateToProps, actionCreators)(SimpleMessage))