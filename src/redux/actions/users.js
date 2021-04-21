import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
} from '../constants';

export const fetchUsers = (page = 1) => {
    return async (dispatch) => {
        await fetch(`https://reqres.in/api/users/?page=${page}`)
            .then((response) => response.json())
            .then((responseData) => dispatch({ type: FETCH_USERS_SUCCESS, payload: [responseData]}))
            .catch(() => dispatch({ type: FETCH_USERS_ERROR, payload: 'Failed to fetch Users.' }));
    };
}