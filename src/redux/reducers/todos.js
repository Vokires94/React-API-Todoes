import {
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_ERROR
} from '../constants';

const initialState = {
    data: [{user_id: '1', text_id: '1', text: 'something'}, {user_id: '1', text_id: '2', text: "dfdsfgsdfgdsfgds"}, {user_id: '1', text_id: '3', text: "534tyertrety"}, {user_id: '1', text_id: '4', text: "ghdfbngvvvvvvvv"},
            {user_id: '2', text_id: '5', text: 'something'}, {user_id: '2', text_id: '6', text: "dfdsfgsdfgdsfgds"}, {user_id: '3', text_id: '7', text: "534tyertrety"}, {user_id: '4', text_id: '8', text: "ghdfbngvvvvvvvv"}],
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
                data: state.data.filter((item) => (item.user_id !== action.payload.user_id && item.text_id !== action.payload.text_id)),
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
