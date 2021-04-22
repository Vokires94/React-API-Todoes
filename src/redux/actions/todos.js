import {
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_ERROR,
    EDIT_TODO_ERROR,
    EDIT_TODO_SUCCESS
} from '../constants';


export const addTodo = (id, text) => {
    return (dispatch) => {
        if (!text) {
            dispatch({ type: ADD_TODO_ERROR, payload: 'Text is not provided or internal error ' })
        } else {
            dispatch({ type: ADD_TODO_SUCCESS, payload: { id, text } })
        }
    };
};

export const deleteTodo = (id, text_id) => {
    return (dispatch) => {
        if (text_id) {
            dispatch({ type: DELETE_TODO_SUCCESS, payload: { id, text_id } })
        } else {
            dispatch({ type: DELETE_TODO_ERROR, payload: 'Error. ID for deletion is not provided or internal error.' })
        };
    };
};

export const editTodo = (id, editValue, newValue) => {
    return (dispatch) => {
        if (newValue) {
            dispatch({ type: EDIT_TODO_SUCCESS, payload: { id, editValue, newValue } })
        } else {
            dispatch({ type: EDIT_TODO_ERROR, payload: 'Error. New Value not set or internal error.' })
        };
    };
};
