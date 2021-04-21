import { combineReducers } from 'redux';

import todos from './todos';
import users from './users';
import admin from './admin';

const mainReducer = combineReducers({
    todos,
    users,
    admin,
});

export default mainReducer;
