import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import './User.css';
import TodoList from '../components/TodoList';
// import { useSelector } from 'react-redux';
// import { getTodosList, getUser } from '../redux/selectors';
//import actions from '../redux/actions';

function User() {
 
 let history = useHistory();
 let { id } = useParams();
 let [account, setAccount]=useState([]);

//  const user = useSelector(getUser);

  async function fetchUsers() {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    if (response.ok){
      let user = await response.json();
      //console.log(user);
      setAccount(user.data);
    } else {
      console.log("Ошибка HTTP:" + response.status);
      }
}

useEffect(() => {
  fetchUsers();
}, []);

  // useEffect(() => {
  //   actions.fetchUser(userId); console.log(user); 
  // },[])

  if (Cookies.get('admin') && Cookies.get('admin_token')) {

    return (
      <div className="user__container">   
        {
            <div key={account.id} className="user__data">            
              <div className="user__avatar"><img alt="avatar" src={account.avatar}/></div>
              <div className="user__details">
                <div><span>User First Name: {account.first_name}</span></div>
                <div><span>User Last Name: {account.last_name}</span></div>
                <div><span>User E-mail: {account.email}</span></div>               
              </div>             
            </div>             
        }
        <div><h2>List of Todos</h2></div>
        <TodoList />
        <div><button onClick={() => history.push(`/users`)} className="button__back">Back</button></div>     
      </div>
    );
  } else {
    setTimeout(() => history.push('/'), 2000);
    return (<div>Unauthorized User. Redirecting to Home page.</div>);

  }
  
  }

export default User;
