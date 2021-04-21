import './Main.css';
import { Link } from 'react-router-dom';


function Main() {

    return (
    <div className="main__container">
        <div className="title"><h3>User Todo Lists</h3></div>
        <div className="description"><span>Welcome to our start page. Please select login or register.</span></div>
        <div className="buttons__container">
            <Link to="/login"><button className="button">Login</button></Link>
            <Link to="/register"><button className="button">Register</button></Link>            
        </div>
    </div>
    );

}

export default Main;