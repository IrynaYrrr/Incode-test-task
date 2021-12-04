import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tickerReducer from './tickerReducer';

const rootReducer = combineReducers({
    tickerReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
