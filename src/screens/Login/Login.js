import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../../redux/actions';
import { getLogin } from '../../redux/selectors';
import './Login.css';

function Login() {

  let history = useHistory();

  const [userpass, setUserpass] = useState('');
  const [useremail, setUseremail] = useState('');
  const loglabel = useSelector(getLogin);

  if (loglabel.admin.length !== 0) {
    setTimeout(() => history.push('/users'), 2000);
  }

  return (
    <div className="login__container">
      <div className="form"><h3>Login Form</h3></div>
      <div className="status"><span>{loglabel.message || 'Please fill in this form to log in your Account.'}</span></div>
      <div className="input__container">
        <label htmlFor="email"></label>
        <input type="text" placeholder="Enter E-mail" name="email" value={useremail} onChange={e => setUseremail(e.target.value)} />
        <label htmlFor="psw"></label>
        <input type="password" placeholder="Enter Password" name="psw" value={userpass} onChange={e => setUserpass(e.target.value)} />
        <input type="submit" onClick={() => actions.fetchLogUser(userpass, useremail)} value="Log in" />
      </div>
    </div>
  );

}

export default Login;