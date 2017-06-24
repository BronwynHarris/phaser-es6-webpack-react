import React from 'react';

import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actions from './behaviors'
import Main from './Main'

function mapStateToProps(state) {
    return {

    }
}

export default withRouter(connect(mapStateToProps, actions)(Main))