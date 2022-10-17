import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul class="nav" id="left-nav">
                <NavLink end to="/"><li>home</li></NavLink>
                <NavLink end to="/Servers"><li>servers</li></NavLink>
                <NavLink end to="/Staff"><li>staff</li></NavLink>
                <NavLink end to="/Fun"><li>fun stuff</li></NavLink>
            </ul>
            <ul class="nav" id="right-nav">
                <NavLink end to="/Rules"><li>rules</li></NavLink>
                <NavLink end to="/Changelog"><li>changelog</li></NavLink>
            </ul>
        </nav>
    )
}

export default Nav