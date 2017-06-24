import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import mainScreenReducer from './screens/Main/behaviors'

const reducers = {
    mainScreen: mainScreenReducer
}

const reducer  = combineReducers(reducers)

export function initStore(initialState){
    return applyMiddleware(thunkMiddleware)(createStore)(reducer, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

}

const store = initStore()
export default store