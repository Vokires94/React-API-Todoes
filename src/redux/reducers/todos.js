import {
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_ERROR
} from '../constants';

const initialState = {
    data: [],
    todoToEdit: {},
    message: '',
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                message: '',
                data: state.data.length === 0 ? [{...action.payload}] : [...state.data, action.payload],
            };

        case ADD_TODO_ERROR:
            return {
                ...state,
                message: action.payload,
            };

        case DELETE_TODO_SUCCESS:
            return {
                ...state,
                message: '',
                data: state.data.filter((item) => item.id !== action.payload.id),
            };

        case DELETE_TODO_ERROR:
            return {
                ...state,
                message: action.payload,
            };

        default:
            return state;
    };
};
