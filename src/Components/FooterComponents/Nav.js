import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul id="Footer-Nav">
                <NavLink end to="/login"><li>staff login</li></NavLink>
                <NavLink end to="/changelog"><li>changelog</li></NavLink>
                <a target="_blank" rel="noreferrer" href="https://github.com/EverettBazzocchi/www.shotty.tech"><li>github</li></a>
                <NavLink end to="/rules"><li>rules</li></NavLink>
            </ul>
        </nav>
    )
}

export default Nav