import { combineReducers } from 'redux';

import todos from './todos';
import users from './users';
import admin from './admin';
import user from './user';

const mainReducer = combineReducers({
    todos,
    users,
    user,
    admin,
});

export default mainReducer;
