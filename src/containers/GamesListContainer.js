import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameContainer from '../containers/GameContainer';
import ScoreListContainer from '../containers/ScoreListContainer';

function GamesListContainer() {

    return (
        <>
            <Header />
            <h2>Games List Container</h2>
            <Footer />
        </>
    );
}


export default GamesListContainer;