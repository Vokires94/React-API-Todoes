import './Main.css';
import { Link } from 'react-router-dom';


function Main() {

    return (
    <>
        <div className="title">Title</div>
        <div className="description"><p>Welcome to Registration Form. Please type in your login and password.</p></div>
        <div className="buttons__container">
            <Link to="/login"><button className="button">Login</button></Link>
            <Link to="/register"><button className="button">Register</button></Link>            
        </div>
    </>
    );

}

export default Main;