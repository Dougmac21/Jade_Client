import React from 'react';
import NavBar from './NavBar';
import '../styles/Header.css';

function Header() {


    return (
        <>
            <div>
                <img src="/HEADER.jpg" alt="" id="header" />
                <h1 className="header-title">JADE ARCADE</h1>
                <ul className="navbar">
                    <NavBar />
                </ul>
            </div>
        </>
    )
};

export default Header;