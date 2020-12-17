import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import GamesListContainer from './containers/GamesListContainer';
import ScoreListContainer from './containers/ScoreListContainer';
import PlayerController from './components/PlayerController';
import Snake from './components/games/Snake';
import PRS from './components/games/PRS';
import Breakout from './components/games/Breakout';


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
          <Route path="/games/PRS" component={PRS} />
          <Route path="/games/breakout" component={Breakout} />
        </>
      </Switch>
    </Router>
  );
};


export default App;