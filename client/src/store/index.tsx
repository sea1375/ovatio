import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';
import thunk from 'redux-thunk'

export default (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
    return store
}


