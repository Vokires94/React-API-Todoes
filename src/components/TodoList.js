import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTodosList } from '../redux/selectors';
import { useParams } from 'react-router-dom';
import actions from '../redux/actions';


const TodoList = () => {

    const [editValue, setEditValue] = useState('');
    const [newValue, setNewValue] = useState('');
    const [addValue, setAddValue] = useState('');
    let { id } = useParams();
    const todosList = useSelector(getTodosList);
    const userList = todosList.filter((elem) => elem.user_id === id);
    return(
        <div>
            <div>
                <input type="text" placeholder="Enter todo" onChange={e => setAddValue(e.target.value)}></input>
                <input type="submit" onClick={() => {actions.addTodo(id, addValue); setEditValue('')}} value="Add"></input>
            </div>
            {userList.length > 0
            ? userList.map((todo, index) => {
                return  <div key={index}>
                        <span>{todo.text}</span>
                        <button onClick={() => setEditValue(todo.text_id)}>Edit</button>
                        <button onClick={() => actions.deleteTodo(todo.text_id)}>Delete</button>
                        </div>
            })
            : <div><span>Empty list</span></div>                
            }
            {editValue && 
            <div>
            <input type="text" placeholder="Enter new value" onChange={e => setNewValue(e.target.value)}></input>
            <input type="submit" onClick={() => {actions.editTodo(editValue, newValue); setEditValue('')}} value="Change"></input>
            </div>
            }
        </div>
    )        
}

export default TodoList