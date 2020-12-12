import React from 'react';
import { Link } from "react-router-dom";

function Header() {



    return(
        <>
        <ul>
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
        </ul>
        </>
    )
};

export default Header;