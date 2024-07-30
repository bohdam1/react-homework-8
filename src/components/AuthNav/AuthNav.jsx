import { Link } from "react-router-dom"
import css from "./AuthNav.module.css"
export const AuthNav = ()=>{

    return (
        <nav className={css.nav}>
            <ul className={css.navlist}>
                <li className={css.navitem}><Link className={css.link} to="/join">Join</Link></li>
                <li className={css.navitem}><Link  className={css.link} to="/login">Log in</Link></li>
            </ul>
        </nav>
    )
}