import {
    FETCH_REG_SUCCESS,
    FETCH_REG_ERROR,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_ERROR,
} from '../constants';


export const fetchRegUser = (password, email) => {
    return async (dispatch) => {
        await fetch(`https://reqres.in/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(
                {
                    "email": email,
                    "password": password
                }
            )
        })
            .then((response) => response.json())
            .then((responseData) => dispatch({ type: FETCH_REG_SUCCESS, payload: [responseData] }))
            .catch(() => dispatch({ type: FETCH_REG_ERROR, payload: 'Registration failed' }));
    }
}

export const fetchLogUser = (password, email) => {
    return async (dispatch) => {
        await fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(
                {
                    "email": email,
                    "password": password
                }
            )
        })
            .then((response) => response.json())
            .then((responseData) => dispatch({ type: FETCH_LOGIN_SUCCESS, payload: [responseData] }))
            .catch(() => dispatch({ type: FETCH_LOGIN_ERROR, payload: 'Log In failed' }));
    }
}