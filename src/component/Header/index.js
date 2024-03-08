import { Link } from "react-router-dom";
import './style.css';

function Header(){
    return(
        <header>
            <h1>Sujeito dev</h1>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    )
}

export default Header;