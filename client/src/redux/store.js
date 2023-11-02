import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; 

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)) 
);