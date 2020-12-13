import './App.css';
import Header from './components/Header';
import GamesListContainer from './containers/GamesListContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GamesContainer from './containers/GamesContainer';
import Footer from './components/Footer';
import Breakout from './components/Breakout'



function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
        <Route exact path="/" component={GamesListContainer} />
        <Route path="/games" component={GamesContainer} />
        <Route path="/scores" component={Breakout} />

        </Switch>
        <Footer />

      </>
    </Router>
    
  );
}

export default App;




