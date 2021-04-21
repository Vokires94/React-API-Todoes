import {
    FETCH_REG_SUCCESS,
    FETCH_REG_ERROR,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_ERROR,
} from '../constants';


const initialState = {
    admin: [],
    message: '',
};

export default (state = initialState, action) => {
    switch (action.type) {        

        case FETCH_REG_SUCCESS:
            if (action.payload[0].hasOwnProperty('error')) {
                return {
                    ...state,
                    message: action.payload[0].error,
                };
            } else {
                return {
                    admin: [...action.payload],
                    message: 'Registration completed. Redirecting to Users.',
                };
            }

        case FETCH_REG_ERROR:
            return {
                ...state,
                message: action.payload,
            };
        
            case FETCH_LOGIN_SUCCESS:
                if (action.payload[0].hasOwnProperty('error')) {
                    return {
                        ...state,
                        message: action.payload[0].error,
                    };
                } else {
                    return {
                        admin: [...action.payload],
                        message: 'Log In completed. Redirecting to Users.',
                    };
                }
    
            case FETCH_LOGIN_ERROR:
                return {
                    ...state,
                    message: action.payload,
                };

        default:
            return state;
    };
};
