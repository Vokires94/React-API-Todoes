import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
} from '../constants';


const initialState = {
    users: [],
    message: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                users: [...action.payload],
                message: '',
            };

        case FETCH_USERS_ERROR:
            return {
                ...state,
                message: action.payload,
            };        

        default:
            return state;
    };
};
