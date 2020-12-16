import React from 'react';
import { Link } from "react-router-dom";
import '../styles/NavBar.css';


const NavBar = () => {
    return (
        <>
            <ul className="navbar-list">
                <li className="active">
                    <Link to="/">Home</Link>
                </li>
                <li className="active">
                    <Link to="/games">Games</Link>
                </li>
                <li className="active">
                    <Link to="/scores">Scoreboard</Link>
                </li>
            </ul>
            {/* <li>
                <Link to="/scores">High Scores</Link>
                </li> */}
            {/* <li>
                <button onClick={goBack}>Back</button>
                </li> */}
        </>
    )
}

export default NavBar;

