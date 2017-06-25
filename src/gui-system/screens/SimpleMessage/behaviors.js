import { Map } from 'immutable'
import { push } from 'react-router-redux'

const SHOW_MESSAGE = 'SHOW_MESSAGE'

export function showMessage(message) {
    return { type: SHOW_MESSAGE, message}
}

export function close() {
    return push('/')
}

export default function reducer(state = Map(), action){
    switch(action.type) {
        case SHOW_MESSAGE:
            return state.merge({
                message: action.message,
            })
    }
    return state
}