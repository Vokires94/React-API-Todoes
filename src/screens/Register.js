import './Register.css';

function Login() {

    return (
    <>
        <div class="form">Register Form</div>
        <div class="Status"><p>Please fill in this form to create an account.</p></div>
        <div class="input__container">
            <label for="email"></label>
            <input type="text" placeholder="Enter E-mail" name="email"></input>
            <label for="psw"></label>
            <input type="password" placeholder="Enter Password" name="psw"></input>
            <button type="submit">Register</button>
        </div>
    </>
    );

}

export default Login;