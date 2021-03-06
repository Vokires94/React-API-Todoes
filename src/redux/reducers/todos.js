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
            { id: 1, text: "Some to Do text User1" },
            { id: 2, text: "Some to Do text1 User1" },
            { id: 3, text: "Some to Do text2 User1" },
            { id: 4, text: "Some to Do text3 User1" },
            { id: 5, text: "Some to Do text4 User1" }
        ],
        [2]: [
            { id: 1, text: "Some to Do text User2" },
            { id: 2, text: "Some to Do text1 User2" },
            { id: 3, text: "Some to Do text2 User2" },
            { id: 4, text: "Some to Do text3 User2" },
            { id: 5, text: "Some to Do text4 User2" }
        ],
        [3]: [
            { id: 1, text: "Some to Do text User3" },
            { id: 2, text: "Some to Do text1 User3" }
        ],
        message: '',
    }

};

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO_SUCCESS:
            if (!state.data[action.payload.id]) {
                state.data[action.payload.id] = [];
                state.data[action.payload.id].push({ id: 1, text: action.payload.text });
            } else
                state.data[action.payload.id].push({ id: state.data[action.payload.id][state.data[action.payload.id].length - 1].id + 1, text: action.payload.text });
            return {
                message: 'Comment Added',
                data: state.data
            };

        case ADD_TODO_ERROR:
            return {
                ...state,
                message: action.payload,
            };

        case DELETE_TODO_SUCCESS:

            state.data[action.payload.id] = [].concat(state.data[action.payload.id].filter(item => item.id !== action.payload.text_id));
            return {
                message: 'Deleted Successfully',
                data: state.data
            };

        case DELETE_TODO_ERROR:
            return {
                ...state,
                message: action.payload,
            };

        case EDIT_TODO_SUCCESS:

            console.log(action.payload.editValue);
            console.log(action.payload.newValue);
            console.log(action.payload.id);
            state.data[action.payload.id].map(item => {
                if (item.id == action.payload.editValue) item.text = action.payload.newValue
                else return item
            });
            return {
                message: 'Edited Successfully',
                data: state.data
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
