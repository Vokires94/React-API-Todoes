//import axios from 'axios';

import {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
} from '../constants';

export const fetchUser = (page = 1) => {
    return async (dispatch) => {
        
        // axios.get(`https://reqres.in/api/users/${page}`)
        // .then((response) => response.json())
        // .then((responseData) => dispatch({ type: FETCH_USER_SUCCESS, payload: [responseData.data]}))
        // .catch(() => dispatch({ type: FETCH_USER_ERROR, payload: 'Something went wrong on USERS fetch' }));

        await fetch(`https://reqres.in/api/users/${page}`)
            .then((response) => response.json())
            .then((responseData) => dispatch({ type: FETCH_USER_SUCCESS, payload: [responseData.data]}))
            .catch(() => dispatch({ type: FETCH_USER_ERROR, payload: 'Something went wrong on USERS fetch' }));

       
    };
};

// export const a = (id) => {
//     return async (dispatch) => {
//         await fetch (`https://reqres.in/api/users/${id}`)
//             .then((response) => response.json())
//             .then((responseData) => console.log(responseData))
//             .catch((error) => console.log(error))
//     };
// };
