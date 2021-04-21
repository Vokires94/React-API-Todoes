import {
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_ERROR,
    EDIT_TODO_SUCCESS,
    EDIT_TODO_ERROR
} from '../constants';

// test instance
const initialState = {
    data: {
        [1]: [
            { id: 0, text: "Some to Do text User1" },
            { id: 1, text: "Some to Do text1 User1" },
            { id: 2, text: "Some to Do text2 User1" },
            { id: 3, text: "Some to Do text3 User1" },
            { id: 4, text: "Some to Do text4 User1" }
        ],
        [2]: [
            { id: 0, text: "Some to Do text User2" },
            { id: 1, text: "Some to Do text1 User2" },
            { id: 2, text: "Some to Do text2 User2" },
            { id: 3, text: "Some to Do text3 User2" },
            { id: 4, text: "Some to Do text4 User2" }
        ],
        [3]: [
            { id: 0, text: "Some to Do text User3" },
            { id: 1, text: "Some to Do text1 User3" }
        ],
        message: '',
    }

};

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO_SUCCESS:  
        const mack = Object.assign({}, state.data);
        mack[action.payload.id].push({id: 5, text: action.payload.text});
            return {
                ...state,
                message: '',
                data: mack
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
                    if (item.text_id === action.payload.editValue) {
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
