import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

function App() {

 let history = useHistory();
 let [users, setUsers] = useState([]);
 let [page, setPages] = useState(1);



  async function fetchUsers(page=1) {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    if (response.ok){
      let users = await response.json();
      //console.log(users);
      setUsers(users.data);
     } else {
      console.log("Ошибка HTTP:" + response.status);
      }
}

useEffect(() => {
  fetchUsers(page);
});

  return (
    <div className="App">
      <button onClick={() => setPages(1)}>Page 1</button>
      <button onClick={() => setPages(2)}>Page 2</button>
      {
        users.map((user) => (
          <div key={user.id} className="List__Container">
            <div><img alt="avatar" src={user.avatar} className="List__Image"/></div>
            <div className="List__Info">
              <div><span>{user.last_name}</span></div>
              <div><span>{user.first_name}</span></div>
              <div><span>{user.email}</span></div>
            </div>
            <div className="button__div">
              <button className="taskbutton" onClick={() => {history.push(`/user/${user.id}`)}}>Tasks</button>
            </div>                       
          </div>
        ))
      }      
    </div>
  );
}

export default App;
