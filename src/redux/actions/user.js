import {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from '../constants';

export const fetchUser = (id) => {
    return async (dispatch) => {
        await fetch(`https://reqres.in/api/users/${id}`)
            .then((response) => response.json())
            .then((responseData) => dispatch({ type: FETCH_USER_SUCCESS, payload: [responseData] }))
            .catch(() => dispatch({ type: FETCH_USER_ERROR, payload: 'Failed to fetch User.' }));
    };
}