import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTodosList } from '../../redux/selectors';
import { useParams } from 'react-router-dom';
import actions from '../../redux/actions';
import './TodoList.css';

const TodoList = () => {

    const [editValue, setEditValue] = useState('');
    const [newValue, setNewValue] = useState('');
    const [addValue, setAddValue] = useState('');
    let { id } = useParams();
    const todosList = useSelector(getTodosList(id));

    return (
        <div className="todo__container">
            <div className="add__container">
                <input type="text" placeholder="Enter todo" onChange={e => setAddValue(e.target.value)} maxLength="30"></input>
                <input type="submit" onClick={() => { actions.addTodo(id, addValue); setAddValue('') }} value="Add"></input>
            </div>
            {todosList.length > 0
                ? todosList.map((todo, index) => {
                    return <div key={index} className="todo">
                        <div>
                            <span>{todo.text}</span>
                        </div>
                        <div>
                            <button onClick={() => setEditValue(todo.id)} className="edit__todo">Edit</button>
                            <button onClick={() => actions.deleteTodo(id, todo.id)} className="delete__todo">Delete</button>
                        </div>
                    </div>
                })
                : <div><span>Empty list</span></div>
            }
            {editValue &&
                <div className="edit__container">
                    <input type="text" placeholder="Enter new value" onChange={e => setNewValue(e.target.value)} maxLength="30"></input>
                    <input type="submit" onClick={() => { actions.editTodo(id, editValue, newValue); setEditValue('') }} value="Change"></input>
                </div>
            }
        </div>
    )
}

export default TodoList;