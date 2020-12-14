import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
	return (
		<Router>
			<Switch>
				<>
					<Route exact path="/" component={HomePage} />
				</>
			</Switch>
		</Router>
	);
};


export default App;




