import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Login() {

    let history = useHistory();

    const [userpass, setUserpass] = useState();
    const [useremail, setUseremail] = useState();
    const [loginmessage, setLoginmessage] = useState('Please fill in this form to login in your Account.');

    async function Login() {

        // test correct login info
        // const user = {        
        //     email: "eve.holt@reqres.in",
        //     password: "cityslicka"
        // }
        
        const user = {
            email: useremail,
            password: userpass
        }

        console.log(user);
      

        let response = await fetch(`https://reqres.in/api/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
        if (response.ok){
          let token = await response.json();
          console.log(token);
          setLoginmessage('Login Successful. Redirecting to Users.');
          setTimeout(() => history.push('/users'), 2000);
        } else {
          console.log("Ошибка HTTP:" + response.status);
          console.log(response);          
          if(!user.password){
            setLoginmessage('Missing password');
          } else
          if(!user.email) {
            setLoginmessage('Missing E-mail');
          } else
            setLoginmessage('Wrong E-mail or password');
            setUseremail('');
            setUserpass('');           
          }
    }

    return (
    <>
        <div class="form">Login Form</div>
        <div class="Status"><p>{loginmessage}</p></div>
        <div class="input__container">
            <label for="email"></label>
            <input type="text" placeholder="Enter E-mail" name="email" value={useremail} onChange={e => setUseremail(e.target.value)} />
            <label for="psw"></label>
            <input type="password" placeholder="Enter Password" name="psw" value={userpass} onChange={e => setUserpass(e.target.value)} />
            <input type="submit" onClick={Login} value="Log in" />
        </div>
    </>
    );

}

export default Login;