import './App.css';
import ArcadeContainer from './containers/ArcadeContainer';
import GamesContainer from './containers/GamesContainer'
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import ScoreBoard from './components/ScoreBoard';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

export const headerRoutes = [
	{ route: '/', name: 'Home', component: ArcadeContainer, routeProps: { exact: true } },
	{ route: '/score-board', name: 'Score Board', component: ScoreBoard }
]

function App() {
	return (
		<div className="App">
			<Router>
				<Header />

				<Switch>
					{headerRoutes.map(({ route, component, name, routeProps = {} }) => <Route key={name} component={component} path={route} {...routeProps} />)
					}

					<Route component={ErrorPage} />
				</Switch>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
