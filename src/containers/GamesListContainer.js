import './App.css';
import Header from '../components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameContainer from '../containers/GameContainer';
import Footer from '../components/Footer';
import ScoreListContainer from '../containers/ScoreListContainer';

function GamesListContainer() {

    return (
        <Router>
            <>
                <Header />
                <Switch>
                    <Route exact path="/games-list" component={GamesListContainer} />
                    <Route path="/game" component={GameContainer} />
                    <Route path="/scores" component={ScoreListContainer} />

                </Switch>
                <Footer />

            </>
        </Router>
    );
}


export default GamesListContainer;