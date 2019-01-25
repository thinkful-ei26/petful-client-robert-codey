import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/cat';
import dogsReducer from './reducers/dog';

const store = createStore(
    combineReducers({
        cats: catsReducer,
        dogs: dogsReducer
    }),
    applyMiddleware(thunk)
);

export default store;