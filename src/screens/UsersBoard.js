import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import actions from '../redux/actions';
import { getUsers } from '../redux/selectors';
import './UsersBoard.css';
import Pagination from '../components/Pagination';

function UsersBoard() {

  let history = useHistory();
  let [page, setPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(6);
  const [postsPerPage, setPostPerPage] = useState(6);

  useEffect(() => {
    actions.fetchUsers(page);
    
  }, [page]);

  const users = useSelector(getUsers);

  const paginate = (pageNumber) => {
    if (pageNumber === 0) setPages(1);
    else if (pageNumber > totalUsers / postsPerPage) setPages(pageNumber - 1);
    else setPages(pageNumber);
  }
  if (!users) {
    return <p>Loading Page...</p>
  } else {

    return (
      <div className="App">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalUsers}
          CurrentPage={page}
          paginate={paginate}
        />

        {
          users.data.map((user) => (
            <div key={user.id} className="List__Container">
              <div><img alt="avatar" src={user.avatar} className="List__Image" /></div>
              <div className="List__Info">
                <div><span>First Name: {user.first_name}</span></div>
                <div><span>Last Name: {user.last_name}</span></div>
                <div><span>E-mail: {user.email}</span></div>
              </div>
              <div className="button__div">
                <button className="taskbutton" onClick={() => { history.push(`/user/${user.id}`) }}>Tasks</button>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default UsersBoard;
