import './App.css';
import Header from './components/Header';
import GamesListContainer from './containers/GamesListContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import ScoreListContainer from './containers/ScoreListContainer';
import PlayerController from './components/PlayerController';



function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={PlayerController} />
          <Route path="/games" component={GamesListContainer} />
          <Route path="/scores" component={ScoreListContainer} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;