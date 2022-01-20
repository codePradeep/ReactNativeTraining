import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootreducer'
//

// const appReducer = combineReducers({
//         rootReducer,
//     });

const store = createStore(rootReducer)

export default store
// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from './reducer/rootreducer'


// const appReducer = combineReducers({
//     rootReducer,
// });



//  let store = createStore(appReducer);

// export default store;
