import store from './store'

const GAME_GUI_REDUX_ACTION = 'GAME_GUI_REDUX_ACTION'

export function listenForGuiGameEvents() {
    const eventsRoot = document.body
    eventsRoot.addEventListener(GAME_GUI_REDUX_ACTION, (e) => {
        console.log('Event from game ', e)
    }, false);
}

export function guiAction(type, payload) {
    const eventsRoot = document.body

    var event = new CustomEvent(
        GAME_GUI_REDUX_ACTION,
        {
            detail: {
                type,
                payload,
            }
        }
    );

    eventsRoot.dispatchEvent(event)

}