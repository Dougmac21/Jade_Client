import './App.css';
import Header from './components/Header';
import GamesListContainer from './containers/GamesListContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import ScoreListContainer from './containers/ScoreListContainer';
import PlayerLogin from './components/PlayerLogin';



function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={PlayerLogin} />
          <Route path="/games" component={GamesListContainer} />
          <Route path="/scores" component={ScoreListContainer} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;