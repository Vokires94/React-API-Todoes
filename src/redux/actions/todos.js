import {
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_ERROR
} from '../constants';

export const addTodo = (id, text) => {
    return (dispatch) => {
        if (!id || !text) {
            dispatch({ type: ADD_TODO_ERROR, payload: 'ID or TEXT is not provided ' })
        } else {
            dispatch({ type: ADD_TODO_SUCCESS, payload: { id, text } })
        }
    };
};

export const deleteTodo = (user_id, text_id) => {
    return (dispatch) => {
        if(user_id && text_id) {
            dispatch({ type: DELETE_TODO_SUCCESS, payload: { user_id, text_id } })
        } else {
            dispatch({ type: DELETE_TODO_ERROR, payload: 'Error. ID for deletion is not provided or internal error.'})
        };
    };
};
