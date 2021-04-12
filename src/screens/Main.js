import './Main.css';
import { Link } from 'react-router-dom';


function Main() {

    return (
    <>
        <div class="title">Title</div>
        <div class="description"><p>Welcome to Registration Form. Please type in your login and password.</p></div>
        <div class="buttons__container">
            <Link to="/login"><button class="button">Login</button></Link>
            <Link to="/register"><button class="button">Register</button></Link>            
        </div>
    </>
    );

}

export default Main;