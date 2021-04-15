import {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
} from '../constants';


const initialState = {
    data: [],
    message: '',
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_SUCCESS:
            return {
                users: [...action.payload],
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
