import {
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_ERROR,
    EDIT_TODO_ERROR,
    EDIT_TODO_SUCCESS
} from '../constants';

import { db } from '../../indexDB';


export const addTodo = (id, text) => {
    const unique_key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return (dispatch) => {
        if (!text) {
            dispatch({ type: ADD_TODO_ERROR, payload: 'Text is not provided or internal error ' })
        } else {
            db.data.add({user_id: id, text_id: unique_key, text: text})
            dispatch({ type: ADD_TODO_SUCCESS, payload: { id, text, unique_key } })
        }
    };
};

export const deleteTodo = (text_id) => {
    return (dispatch) => {
        if(text_id) {
            db.data.where('text_id').equals(text_id).delete();
            dispatch({ type: DELETE_TODO_SUCCESS, payload: { text_id } })
        } else {
            dispatch({ type: DELETE_TODO_ERROR, payload: 'Error. ID for deletion is not provided or internal error.'})
        };
    };
};

export const editTodo = (editValue, newValue) => {
    return (dispatch) => {
        if(newValue) {
            db.data.where('text_id').equals(editValue).modify({text: newValue})
            dispatch({ type: EDIT_TODO_SUCCESS, payload: { editValue, newValue } })
        } else {
            dispatch({ type: EDIT_TODO_ERROR, payload: 'Error. New Value not set or internal error.'})
        };
    };
};
