import HomePage from './components/HomePage';
import GamesListContainer from './containers/GamesListContainer';
import ScoreListContainer from './containers/ScoreListContainer';
import PlayerController from './components/PlayerController';
import Snake from './components/games/Snake';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/games" component={GamesListContainer} />
          <Route path="/scores" component={ScoreListContainer} />
          <Route path="/log-in" component={PlayerController} />
          <Route path="/games/snake" component={Snake} />
        </>
      </Switch>
    </Router>
  );
};


export default App;