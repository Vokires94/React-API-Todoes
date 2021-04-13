import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';
import Pagination from '../components/Pagination';

function App() { 

 let history = useHistory();
 let [users, setUsers] = useState([]);
 let [page, setPages] = useState(1);
 const [totalUsers, setTotalUsers] = useState(6);
 const [postsPerPage] = useState(6);


  async function fetchUsers(page=1) {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    if (response.ok){
      let users = await response.json();
      //console.log(users);
      setUsers(users.data);
      setTotalUsers(users.total);

     } else {
      console.log("Ошибка HTTP:" + response.status);
      }
}

useEffect(() => {
  fetchUsers(page);
},[page]);

const paginate = (pageNumber) => {  
  if(pageNumber == 0) setPages(1);  
  if(pageNumber > totalUsers) setPages(pageNumber-1);
}

if (Cookies.get('admin') && Cookies.get('admin_token')) {

  return (
    <div className="App">      
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={totalUsers}
        CurrentPage={page}
        paginate={paginate}      
      />
      
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
   
} else {
  setTimeout(() => history.push('/'), 2000);
  return (<div>Unauthorized User. Redirecting to Home page.</div>);

}
 
}

export default App;
