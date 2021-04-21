import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../redux/actions';
import { getRegister } from '../redux/selectors';
import './Register.css';

function Register() {

  let history = useHistory();

  const [userpass, setUserpass] = useState('');
  const [useremail, setUseremail] = useState('');
  const reglabel = useSelector(getRegister);

  if (reglabel.admin.length !== 0) {
    setTimeout(() => history.push('/users'), 2000);
  }

  return (
    <div className="register__container">
      <div className="form"><h3>Register Form</h3></div>
      <div className="status"><span>{reglabel.message || 'Please fill in this form to register in your Account.'}</span></div>
      <div className="input__container">
        <label htmlFor="email"></label>
        <input type="text" placeholder="Enter E-mail" name="email" value={useremail} onChange={e => setUseremail(e.target.value)} />
        <label htmlFor="psw"></label>
        <input type="password" placeholder="Enter Password" name="psw" value={userpass} onChange={e => setUserpass(e.target.value)} />
        <input type="submit" onClick={() => actions.fetchRegUser(userpass, useremail)} value="Reg in" />
      </div>
    </div>
  );

}

export default Register;