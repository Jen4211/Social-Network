import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";


const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.activeLink}>Message</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;