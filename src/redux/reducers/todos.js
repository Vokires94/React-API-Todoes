import {
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_ERROR,
    EDIT_TODO_SUCCESS,
    EDIT_TODO_ERROR
} from '../constants';

// test instance
// const initialState = {
//     data: [{user_id: '1', text_id: '1', text: 'something'},
//            {user_id: '1', text_id: '2', text: "dfdsfgsdfgdsfgds"},
//            {user_id: '1', text_id: '3', text: "534tyertrety"},
//            {user_id: '1', text_id: '4', text: "ghdfbngvvvvvvvv"},
//            {user_id: '2', text_id: '5', text: 'something'},
//            {user_id: '2', text_id: '6', text: "dfdsfgsdfgdsfgds"},
//            {user_id: '3', text_id: '7', text: "534tyertrety"},
//            {user_id: '4', text_id: '8', text: "ghdfbngvvvvvvvv"},
//           ],
//     message: '',
// };

const initialState = {
    data: [],
    message: '',
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                message: '',
                data: state.data.concat({user_id: action.payload.id, text_id: action.payload.unique_key, text: action.payload.text})
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
                data: state.data.filter((item) => item.text_id !== action.payload.text_id),
            };

        case DELETE_TODO_ERROR:
            return {
                ...state,
                message: action.payload,
            };

            case EDIT_TODO_SUCCESS:
            return {
                ...state,
                message: '',
                data: state.data.map((item, index) => { 
                    if(item.text_id === action.payload.editValue) {
                        return {
                            ...item,
                            text: action.payload.newValue
                        }
                    } else {
                        return item
                    }
                }),
            };

            case EDIT_TODO_ERROR:
            return {
                ...state,
                message: action.payload,                
            };

        default:
            return state;
    };
};
