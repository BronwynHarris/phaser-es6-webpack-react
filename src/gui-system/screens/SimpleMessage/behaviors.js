import { Map } from 'immutable'
import { push } from 'react-router-redux'

const SHOW_MESSAGE = 'SHOW_MESSAGE'

export function showMessage(message, onClose) {
    return { type: SHOW_MESSAGE, message, onClose}
}

export function close() {
    return (dispatch, getState) => {
        dispatch(push('/'))
        const state = getState()
        const onClose = state.simpleMessage.get('onClose')
        if(onClose) {
            onClose()
        }
    }
}

export default function reducer(state = Map(), action){
    switch(action.type) {
        case SHOW_MESSAGE:
            return state.merge({
                message: action.message,
                onClose: action.onClose,
            })
    }
    return state
}