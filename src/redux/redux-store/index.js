import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import mainReducer from '../reducers';
const middlewares = [ReduxThunk];
const initialState = {};

/* global process */
middlewares.push(ReduxLogger);

export default createStore(mainReducer, initialState, applyMiddleware(...middlewares));
