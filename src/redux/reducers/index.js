import { combineReducers } from 'redux';

import todos from './todos';
//import user from './user';

const mainReducer = combineReducers({
    todos,
    // user,
});

export default mainReducer;
