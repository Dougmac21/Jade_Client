import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import GamesListContainer from './containers/GamesListContainer';
import ScoreListContainer from './containers/ScoreListContainer';
import PlayerController from './components/PlayerController';
import TicTacToe from './components/games/TicTacToe/TicTacToe';

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/games" component={GamesListContainer} />
          <Route path="/scores" component={ScoreListContainer} />
          <Route path="/log-in" component={PlayerController} />
          <Route path="/games/tictactoe" component={TicTacToe} />
        </>
      </Switch>
    </Router>
  );
};


export default App;