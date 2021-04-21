import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import actions from '../../redux/actions';
import { getUser } from '../../redux/selectors';
import './User.css';
import TodoList from '../../components/TodoList';

function User() {

  let history = useHistory();
  let { id } = useParams();

  useEffect(() => {
    actions.fetchUser(id);
  }, [id]);

  const user = useSelector(getUser);

  if (!user) {
    return <p>Loading Page...</p>
  } else {
    return (
      <div className="user__container">
        {
          <div key={user.data.id} className="user__data">
            <div className="user__avatar"><img alt="avatar" src={user.data.avatar} /></div>
            <div className="user__details">
              <div><span>User First Name: {user.data.first_name}</span></div>
              <div><span>User Last Name: {user.data.last_name}</span></div>
              <div><span>User E-mail: {user.data.email}</span></div>
            </div>
          </div>
        }
        <div><h2>List of Todos</h2></div>
        <TodoList />
        <div><button onClick={() => history.push(`/users`)} className="button__back">Back</button></div>
      </div>
    );

  }

}

export default User;
