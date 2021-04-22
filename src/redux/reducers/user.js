import {
    FETCH_USER_ERROR,
    FETCH_USER_SUCCESS
} from '../constants';


const initialState = {
    user: [],
    message: '',
};

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_USER_SUCCESS:
            return {
                user: [...action.payload],
                message: '',
            };

        case FETCH_USER_ERROR:
            return {
                ...state,
                message: action.payload,
            };

        default:
            return state;
    };
};
