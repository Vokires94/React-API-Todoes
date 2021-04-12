import { useState } from 'react';
import './App.css';

function App() {

 let [users, setUsers]=useState([]);

  async function fetchUsers(page=1) {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    if (response.ok){
      let users = await response.json();
      setUsers(users.data);
    } else {
      console.log("Ошибка HTTP:" + response.status);
      }
}

  return (
    <div className="App">
      <button onClick={() => fetchUsers(1)}>Page 1</button>
      <button onClick={() => fetchUsers(2)}>Page 2</button>
      {
        users.map((user) => (
          <div key={user.id} className="List__Container">
            <div><img alt="avatar" src={user.avatar} className="List__Image"/></div>
            <div className="List__Info">
              <div><span>{user.last_name}</span></div>
              <div><span>{user.first_name}</span></div>
              <div><span>{user.email}</span></div>
            </div>                       
          </div>
        ))
      }      
    </div>
  );
}

export default App;
