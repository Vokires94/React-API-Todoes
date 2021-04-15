import React from 'react';
import { useSelector } from 'react-redux';
import { getTodosList } from '../redux/selectors';
import { useParams } from 'react-router-dom';
import actions from '../redux/actions';


const TodoList = () => {

    let { id } = useParams();
    const todosList = useSelector(getTodosList);
    const userList = todosList.filter((elem) => elem.user_id === id);

    return(
        <div>
            {userList.length > 0
            ? userList.map((todo, index) => {
                return  <div key={index}>
                        <span>{todo.text}</span>
                        <button onClick={() => actions.editTodo(id, todo.text_id)}>Edit</button>
                        <button onClick={() => actions.deleteTodo(id, todo.text_id)}>Delete</button>
                        </div>
            })
            : <div><span>Empty list</span></div>
            
            }
        </div>
    )        
}

export default TodoList