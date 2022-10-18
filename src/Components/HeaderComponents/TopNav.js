import { NavLink } from 'react-router-dom';
import "./Header.css"

const TopNav = () => {
    return (
        <div id="TopNav">
            <h1>Shotty Tech / Gaming</h1>
            <h2><NavLink to="/login">Staff Login</NavLink></h2>
        </div>
    )
}

export default TopNav