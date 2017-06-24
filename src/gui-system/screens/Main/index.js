import React from 'react';

import {connect} from 'react-redux'

import * as actions from './behaviors'
import Main from './Main'

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, actions)(Main)