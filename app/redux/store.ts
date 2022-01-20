import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootreducer'
//,applyMiddleware(thunk)

const store = createStore(rootReducer)

export default store