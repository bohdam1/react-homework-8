import { Link } from "react-router-dom"
export const AuthNav = ()=>{

    return (
        <nav>
            <ul>
                <li><Link to="/join">Join</Link></li>
                <li><Link to="/login">Log in</Link></li>
            </ul>
        </nav>
    )
}