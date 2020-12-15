import React from 'react';
import NavBar from './NavBar';
import '../styles/Header.css';

function Header() {


    return (
        <>
            <h1 className="header-title">Jade Arcade</h1>
            <ul className="navbar">
                <NavBar />
            </ul>
        </>
    )
};

export default Header;