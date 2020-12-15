import HomePage from './components/HomePage';
import GamesListContainer from './containers/GamesListContainer';
import ScoreListContainer from './containers/ScoreListContainer';
import PlayerController from './components/PlayerController';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/" component={HomePage} />
          <Route path="/games" component={GamesListContainer} />
          <Route path="/scores" component={ScoreListContainer} />
          <Route path="/log-in" component={PlayerController} />
        </>
      </Switch>
    </Router>
  );
};


export default App;