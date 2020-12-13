import React from 'react';
import NavBar from './NavBar';
import './Header.css';
import './NavBar.css';

function Header() {


    return(
        <>
        <h1 className="header-title">Jade Arcade</h1>
        <ul className="navbar">
           <NavBar />
        </ul>
        </>
    )
};

export default Header;