import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

function ScoreListContainer() {

    return (
        <>
            <Header/>
            <h2>Score list </h2>
            <Footer/>
        </>
    )
}

export default ScoreListContainer;