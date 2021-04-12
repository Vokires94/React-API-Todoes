import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './User.css';

function User() {
 
 let history = useHistory();
 let { id } = useParams();
 let [account, setAccount]=useState([]);

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
fetchUsers();

  return (
    <div className="user__container">      
      {
          <div key={account.id} className="">            
            <div><img alt="avatar" src={account.avatar} className="List__Image"/></div>
            <div className="">
              <div><span>{account.last_name}</span></div>
              <div><span>{account.first_name}</span></div>              
            </div>
            <div><span>{account.email}</span></div>
            <div><input type="text" placeholder="Enter todo"></input><button>Edit</button></div>
            <div><h2>List of Todos</h2></div>
            <div><span>Список Дел</span><button>Edit</button><button>Delete</button></div>
            <div><button onClick={() => history.push(`/users`)}>Back</button></div>                                       
          </div>
        
      }      
    </div>
  );
}

export default User;
