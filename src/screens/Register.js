import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import './Register.css';

function Register() {

    let history = useHistory();

    const [userpass, setUserpass] = useState();
    const [useremail, setUseremail] = useState();
    const [regmessage, setRegmessage] = useState('Please fill in this form to register in your Account.');

    async function Reg() {

        // test correct login info
        // const user = {        
        //     email: "eve.holt@reqres.in",
        //     password: "vokivoki"
        // }
        
        const user = {
            email: useremail,
            password: userpass
        }

        console.log(user);
      

        let response = await fetch(`https://reqres.in/api/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
        if (response.ok){
          let token = await response.json();
          console.log(token);
          setRegmessage('Register Successful. Redirecting to Users.');
          Cookies.set('admin', user.email, {path: '/'});
          Cookies.set('admin_token', token.token, {path: '/'});
          console.log(document.cookie);         
          setTimeout(() => history.push('/users'), 2000);
        } else {
          console.log("Ошибка HTTP:" + response.status);
          console.log(response);          
          if(!user.password){
            setRegmessage('Missing password');
          } else
          if(!user.email) {
            setRegmessage('Missing E-mail');
          } else
          setRegmessage('Wrong E-mail or password');
            setUseremail('');
            setUserpass('');           
          }
    }

    return (
    <>
        <div className="form">Register Form</div>
        <div className="Status"><p>{regmessage}</p></div>
        <div className="input__container">
            <label htmlFor="email"></label>
            <input type="text" placeholder="Enter E-mail" name="email" value={useremail} onChange={e => setUseremail(e.target.value)} />
            <label htmlFor="psw"></label>
            <input type="password" placeholder="Enter Password" name="psw" value={userpass} onChange={e => setUserpass(e.target.value)} />
            <input type="submit" onClick={Reg} value="Reg in" />
        </div>
    </>
    );

}

export default Register;