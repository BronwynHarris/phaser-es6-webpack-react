import { Map } from 'immutable'

const SHOW_MESSAGE = 'SHOW_MESSAGE'

export function showMessage(message) {
    return { type: SHOW_MESSAGE, message}
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