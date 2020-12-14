import HomePage from './components/HomePage';
import GamesListContainer from './containers/GamesListContainer';
import ScoreListContainer from './containers/ScoreListContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<>
					<Route exact path="/" component={HomePage} />
					<Route path="/games" component = {GamesListContainer}/>
					<Route path="/scores" component = {ScoreListContainer}/>
				</>
			</Switch>
		</Router>
	);
};


export default App;




