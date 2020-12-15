import HomePage from './components/HomePage';
import GamesListContainer from './containers/GamesListContainer';
<<<<<<< HEAD
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

=======
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
>>>>>>> ad0f05ad752eadb813c9dca8591209bd03859ea8

export default App;