import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
        <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/games">Games</Link>
            </li>
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

